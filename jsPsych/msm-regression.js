/** (November 2020, Mathias Sablé-Meyer)
This plugin implements a regression-slope guessing task with feedback. Ad hoc
reimplementation of Lorenzo Ciccione and Stanislas Dehaene's task as described
in [...]
*/

jsPsych.plugins['regression'] = (function(){

  var plugin = {};

  plugin.info = {
    name: 'regression',
    parameters: {
      points: {
        pretty_name: 'points',
        default: null,
        description: 'array of (x, y) coordinates to plot'
      },
      fix_pt: {
        pretty_name: 'fixcrossPresentationTime',
        default: 1000,
        description: 'How long should the fixation cross be displayed?'
      },
      graph_pt: {
        pretty_name: 'graphPresentationTime',
        default: 100,
        description: 'How long should the graph be displayed?'
      },
      beta: {
        pretty_name: 'actualBeta',
        default: undefined,
        description: 'What is the actual slope with OLS?'
      }
    }
  }

  plugin.trial = function(display_element, trial){
    var keyboardListener = undefined;
    var results = {};
    var origin_of_time;
    var untrust_graph_pt;
    var actual_cross_pt;
    var actual_graph_pt;
    var start_cross = 0;
    var start_graph = 0;
    var counter_frames = 0;
    var progress = NaN;

    update_score();

    // Separate [(x1, y1), (x2, y2), ...] => [x1, x2,...], [y1, y2, ...]
    var x = [];
    var y = [];
    trial.points.forEach(function(e) {
      x.push(e[0]);
      y.push(e[1]);
    });

    proceed = function() {
      // Plotly boilerplate, ugly but efficient
      var trace = {
        x: x,
        y: y,
        mode: 'markers',
        type: 'scatter',
        marker: { color: 'white', size: pointsize, }
      };
      var trace_cross = {
        x: [0],
        y: [0.5],
        size: 12,
        mode: 'markers',
        type: 'scatter',
        marker: { color: 'white', size: 5*pointsize, symbol: "cross"}
      };
      var layout = {
        xaxis: {
          range: [-0.5-0.27, 0.5+0.27],
          showgrid: false,
          showline: true,
          zeroline: false,
          linewidth: linesize,
          linecolor: "white",
          tickmode: "array",
          tickvals: [-0.5, 0, 0.5],
          ticktext: ["", "", ""],
          ticks: "inside",
          tickwidth: linesize,
          ticklen: 2*linesize,
          tickcolor: 'white'
        },
        yaxis: {
          range: [-0.27, 1.27],
          showgrid: false,
          showline: true,
          zeroline: false,
          linewidth: linesize,
          linecolor: "white",
          tickmode: "array",
          tickvals: [0, 0.5, 1],
          ticktext: ["", "", ""],
          ticks: "inside",
          tickwidth: linesize,
          ticklen: 2*linesize,
          tickcolor: 'white'
        },
        plot_bgcolor:"black",
        paper_bgcolor:"black",
        showlegend: false,
        margin: {
          l: 5,
          r: 5,
          b: 5,
          t: 5,
          pad: 0
        },
      };

      // define the two listeners (keyboard and touchscreen) + they call "end trial"
      var end_trial_keyboard = function(info) {
        // Compute RT as early as we can to avoid jitter
        results.rt = performance.now() - origin_of_time;
        results.modality = "keyboard";
        info.key = jsPsych.pluginAPI.convertKeyCodeToKeyCharacter(info.key);
        if ((info.key == "s" && leftIsUp) || (info.key == "l" && !leftIsUp)) {
          results.dir = "up";
        }
        else {
          results.dir = "down";
        }
        results.key = info.key;
        end_trial(results);
      }
      var end_trial_touchscreen = function(e, direction) {
        b_up.onclick = undefined;
        b_down.onclick = undefined;
        results.key = "NA"
        results.rt = performance.now() - origin_of_time;
        results.dir = direction;
        results.modality = "touchscreen";
        end_trial(results);
      }
      var end_trial = function(results) {
        // Store all relevant data
        results.actual_cross_pt = actual_cross_pt;
        results.actual_graph_pt = actual_graph_pt;
        results.untrust_graph_pt = untrust_graph_pt;
        results.points_x = x;
        results.points_y = y;
        results.T_test = tFromXY(x, y);
        results.nbOfFrames = counter_frames;

        // Compute correctness and play feedback accordingly
        if (results.dir == "up") {
          results.correct = trial.beta > 0
        }
        else {
          results.correct = trial.beta < 0
        }

        var p1 = document.createElement("h2");
        var p1c = document.createElement("div");
        p1.id = "p1";
        p1c.id = "p1c";
        p1c.style.width = size + "px";
        p1c.style.height = size + "px";
        p1c.style.position = "absolute";
        p1c.style.top = ((height - size) / 2) + "px";
        p1c.style.left = ((width - size) / 2) + "px";
        p1c.style.zIndex = 10;
        display_element.appendChild(p1c);
        p1c.appendChild(p1);
        score = Math.round(Math.max(2000 - results.rt, 1)/200)
        if (results.correct) {
          current_streak += 1;
          current_bonus += score;
          correct[Math.min(current_streak, 6)].play();
          longest_streak = Math.max(longest_streak, current_streak);
          total_score += current_bonus;
          p1.innerHTML = "+" + current_bonus;
          p1.style.color = "green";
          update_score();
        }
        else {
          incorrect.play();
          current_streak = 0;
          current_bonus = 0;
          p1.innerHTML = "0",
          p1.style.color = "red";
          update_score();
        }

        results.current_streak = current_streak;
        results.longest_streak = longest_streak;
        results.current_bonus = current_bonus;
        results.total_score = total_score;

        // Clear callbacks and listeners
        jsPsych.pluginAPI.clearAllTimeouts();
        jsPsych.pluginAPI.cancelKeyboardResponse(keyboardListener);

        // Clear the display and terminate
        setTimeout(function() {
          p1.style.fontSize = "5em";
        }, 17);
        setTimeout(function() {
          display_element.innerHTML = '';
          jsPsych.finishTrial(results);
        }, 1000);
      }

      // Now generate the display
      // Create div for canvas, fixcross and question pane
      var canvas = document.createElement("div");
      var canvas_axes = document.createElement("div");
      var canvas_fix = document.createElement("div");
      canvas.id = "canvas";
      canvas_axes.id = "canvas_axes";
      canvas_fix.id = "canvas_fix";

      canvas.style.width = size + "px";
      canvas.style.height = size + "px";
      canvas.style.position = "absolute";
      canvas.style.top = "0px";
      canvas.style.left = ((width - size) / 2) + "px";
      canvas.style.zIndex = 2;
      canvas_axes.style.width = size + "px";
      canvas_axes.style.height = size + "px";
      canvas_axes.style.position = "absolute";
      canvas_axes.style.top = "0px";
      canvas_axes.style.left = ((width - size) / 2) + "px";
      canvas_axes.style.zIndex = 1;
      canvas_fix.style.width = size + "px";
      canvas_fix.style.height = size + "px";
      canvas_fix.style.position = "absolute";
      canvas_fix.style.top = "0px";
      canvas_fix.style.left = ((width - size) / 2) + "px";
      canvas_fix.style.zIndex = 1;

      display_element.appendChild(canvas_axes);
      display_element.appendChild(canvas);
      display_element.appendChild(canvas_fix);
      canvas.style.visibility = "hidden";

      Plotly.newPlot('canvas', [trace], layout, {staticPlot: true});
      Plotly.newPlot('canvas_fix', [trace_cross], layout, {staticPlot: true});
      Plotly.newPlot('canvas_axes', [], layout, {staticPlot: true});

      var b_up;
      var b_down;
      if (device === "touchscreen") {
        b_up = document.createElement("div");
        var f_up = document.createElement("img");
        b_up.style.height = size + "px";
        b_up.style.width = (width - size) / 2 + "px";
        b_up.style.position = "absolute";
        b_up.style.top = "0px";
        f_up.src = "./res/uparrow.png";
        f_up.style.width = (width - size) / 2 + "px";
        f_up.style.height = (width - size) / 2 + "px";
        f_up.style.position = "absolute";
        f_up.style.top = "50%";
        f_up.style.left = "50%";
        f_up.style.transform = "translate(-50%,-50%)"
        b_up.appendChild(f_up);

        b_down = document.createElement("div");
        var f_down = document.createElement("img");
        b_down.style.height = size + "px";
        b_down.style.width = (width - size) / 2 + "px";
        b_down.style.position = "absolute";
        b_down.style.top = "0px";
        f_down.src = "./res/downarrow.png";
        f_down.style.width = (width - size) / 2 + "px";
        f_down.style.height = (width - size) / 2 + "px";
        f_down.style.position = "absolute";
        f_down.style.top = "50%";
        f_down.style.left = "50%";
        f_down.style.transform = "translate(-50%,-50%)"
        b_down.appendChild(f_down);

        if (leftIsUp) {
          b_up.style.left = "0px"
          b_down.style.left = (size + ((width - size) / 2)) + "px";
        }
        else {
          b_up.style.left = (size + ((width - size) / 2)) + "px";
          b_down.style.left = "0px"
        }

        display_element.appendChild(b_up);
        display_element.appendChild(b_down);
      }

      // Using requestAnimationFrame, show cross then graph then "o" for accurate
      // durations
      function init(timestamp) {
        start_cross = start_cross == 0 ? timestamp : 0;
        requestAnimationFrame(loop_with_fixcross);
      }
      function loop_with_fixcross(timestamp) {
        progress = timestamp - start_cross;
        if (progress < trial.fix_pt - (FPS/2)) {
          requestAnimationFrame(loop_with_fixcross);
        }
        else {
          actual_cross_pt = progress;
          requestAnimationFrame(show_graph);
        }
      }
      function show_graph(timestamp) {
        if (start_graph == 0) {
          canvas.style.visibility = "visible";
          canvas_fix.innerHTML = "";
          untrust_graph_pt = performance.now();
          start_graph = timestamp;
          origin_of_time = performance.now()
        }
        progress = timestamp - start_graph;
        if (progress < trial.graph_pt - (FPS/2)) {
          counter_frames += 1;
          requestAnimationFrame(show_graph);
        }
        else {
          actual_graph_pt = progress;
          untrust_graph_pt = performance.now() - untrust_graph_pt;
          canvas.innerHTML = "";

          if (device === "keyboard") {
            keyboardListener = jsPsych.pluginAPI.getKeyboardResponse({
              callback_function: end_trial_keyboard,
              valid_responses: ["s", "l"],
              persist: false
            });
          }
          else {
            b_up.onclick = function(e) { end_trial_touchscreen(e, "up"); };
            b_down.onclick = function(e) { end_trial_touchscreen(e, "down"); };
          }
        }
      }

      // Start the trampoline
      requestAnimationFrame(init);
    }

    var size;
    var linesize;
    var pointsize;
    // Compute sizes based on the screen: test and report
    var width = window.innerWidth
    var height = window.innerHeight

    check_paysage = function() {
      if (device === "touchscreen" && height > width) {
        var orientation = (screen.orientation || {}).type || screen.mozOrientation || screen.msOrientation;
        display_element.innerHTML = strings_horizontal[lang];
        width = window.innerWidth
        height = window.innerHeight
        setTimeout(check_paysage, 100);
      }
      else {
        size = (width < height ? width : height);
        linesize = size / 200;
        pointsize = size / 100;
        display_element.innerHTML = ""
        proceed()
      }
    }

    check_paysage();

  }

  return plugin;

})();
