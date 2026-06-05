// Neat function from https://stackoverflow.com/questions/6131051/is-it-possible-to-find-out-what-is-the-monitor-frame-rate-in-javascript
function calcFPS(a){function b(){if(f--)c(b);else{var e=3*Math.round(1E3*d/3/(performance.now()-g));"function"===typeof a.callback&&a.callback(e);}}var c=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame;if(!c)return!0;a||(a={});var d=a.count||60,f=d,g=performance.now();b()}

var round_fps = function(fps) {
  if (fps < 45) {
    return 30
  }
  else if (fps < 90) {
    return 60
  }
  else if (fps < 180) {
    return 120
  }
  else {
    return 240
  }
}

// Standard Normal variate using Box-Muller transform.
function randn_bm() {
    var u = 0, v = 0;
    while(u === 0) u = Math.random(); //Converting [0,1) to (0,1)
    while(v === 0) v = Math.random();
    return Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
}

var array_sum = function(arr) {
  var sum = 0;
  for (var idx = 0 ; idx < arr.length ; idx++) {
    sum += arr[idx];
  }
  return sum;
}
var array_mean = function(arr) {
  return array_sum(arr) / arr.length;
}

var linear_regression_slope_ols = function(x, y) {
  len = x.length;

  mu_x = array_mean(x);
  mu_y = array_mean(y);

  xx = x.map(function(e) { return e * e })
  xy = x.map(function(e, idx) { return e * y[idx] })

  SS_xx = array_sum(xx) - (mu_x * mu_x * len)
  SS_xy = array_sum(xy) - (mu_x * mu_y * len)

  beta = SS_xy / SS_xx;
  intercept = mu_y - (beta * mu_x);

  return [intercept, beta]
}

//var correct = new Audio('res/correct.wav');
var correct = [];
for (i = 1 ; i <= 7 ; i++) {
  correct.push(new Audio('res/pos'+i+'.wav'));
}
var incorrect = new Audio('res/incorrect.wav');

hide_score = function() {
  score_div.innerHTML =  "";
  score_div.style.display = "none";
}
