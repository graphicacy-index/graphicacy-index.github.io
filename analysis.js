// For each regression trial, compute the slope t-statistic of the (x, y) cloud:
//     t = r * sqrt((n - 2) / (1 - r^2))
// then logistic-regress dir (up=0, down=1) on t across trials and report the
// slope coefficient. Mirrors R's glm.fit used in original publications.

var pearson = function(x, y) {
  var n = x.length;
  var mx = 0, my = 0;
  for (var i = 0; i < n; i++) { mx += x[i]; my += y[i]; }
  mx /= n; my /= n;
  var num = 0, sx = 0, sy = 0;
  for (var i = 0; i < n; i++) {
    var dx = x[i] - mx, dy = y[i] - my;
    num += dx * dy; sx += dx * dx; sy += dy * dy;
  }
  var denom = Math.sqrt(sx * sy);
  if (denom === 0) return NaN;
  return num / denom;
}

var tFromXY = function(x, y) {
  var n = x.length;
  if (n < 3) return NaN;
  var r = pearson(x, y);
  if (!isFinite(r)) return NaN;
  var oneMinusR2 = 1 - r * r;
  if (oneMinusR2 <= 0) return NaN;
  return r * Math.sqrt((n - 2) / oneMinusR2);
}

// Logistic regression (intercept + one predictor) via IRLS, matching glm.fit.
// Returns [intercept, slope]; slope is the "sensitivity".
var logisticRegressionIRLS = function(t, y) {
  var maxIter = 25;
  var tol = 1e-8;
  var n = t.length;
  var b0 = 0, b1 = 0;
  var devPrev = Infinity;
  for (var iter = 0; iter < maxIter; iter++) {
    var s00 = 0, s01 = 0, s11 = 0, r0 = 0, r1 = 0, dev = 0;
    for (var i = 0; i < n; i++) {
      var eta = b0 + b1 * t[i];
      var mu;
      if (eta >= 0) {
        mu = 1 / (1 + Math.exp(-eta));
      } else {
        var e = Math.exp(eta);
        mu = e / (1 + e);
      }
      if (mu < 1e-15) mu = 1e-15;
      if (mu > 1 - 1e-15) mu = 1 - 1e-15;
      var w = mu * (1 - mu);
      var z = eta + (y[i] - mu) / w;
      s00 += w;
      s01 += w * t[i];
      s11 += w * t[i] * t[i];
      r0 += w * z;
      r1 += w * z * t[i];
      if (y[i] > 0) dev += -2 * y[i] * Math.log(mu);
      if (y[i] < 1) dev += -2 * (1 - y[i]) * Math.log(1 - mu);
    }
    var det = s00 * s11 - s01 * s01;
    if (det === 0) break;
    b0 = (s11 * r0 - s01 * r1) / det;
    b1 = (-s01 * r0 + s00 * r1) / det;
    if (Math.abs(dev - devPrev) / (0.1 + Math.abs(dev)) < tol) break;
    devPrev = dev;
  }
  return [b0, b1];
}

// Logistic-regression slope of dir ~ T_test across the regression trials
// already in jsPsych's data values. Each row carries a numeric T_test (added
// by msm-regression.js) and a "dir" string ("up" or "down").
var computeSensitivity = function(rows) {
  var ts = [], ys = [];
  for (var i = 0; i < rows.length; i++) {
    var row = rows[i];
    if (row.trial_type !== "regression") continue;
    if (!isFinite(row.T_test)) continue;
    if (row.dir !== "up" && row.dir !== "down") continue;
    ts.push(row.T_test);
    ys.push(row.dir === "up" ? 0 : 1);
  }
  if (ts.length < 2) return NaN;
  var hasUp = false, hasDown = false;
  for (var i = 0; i < ys.length; i++) {
    if (ys[i] === 0) hasUp = true; else hasDown = true;
  }
  if (!(hasUp && hasDown)) return NaN;
  return logisticRegressionIRLS(ts, ys)[1];
}
