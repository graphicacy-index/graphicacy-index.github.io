var subject_id = jsPsych.randomization.randomID(10);
var leftIsUp = Math.random() < 0.5;
// For what duration should the graph be displayed? Based on the url

// Record the ID of the participant and some screen property just in case
jsPsych.data.addProperties({'ID': subject_id});
jsPsych.data.addProperties({'lang': lang});
jsPsych.data.addProperties({'leftIsUp': leftIsUp});
jsPsych.data.addProperties({'screenX': screen.width});
jsPsych.data.addProperties({'screenY': screen.height});
jsPsych.data.addProperties({'innerX': window.innerWidth});
jsPsych.data.addProperties({'innerY': window.innerHeight});
jsPsych.data.addProperties({'version': 2});

// Global variables for current/global streak
var current_streak = 0;
var current_bonus = 0;
var longest_streak = 0;
var total_score = 0;
var loop_number = 0;
var device;
var FPS;
var raw_FPS;

var score_div = document.createElement("div");
score_div.id = "score";

// declare the consent block.
var consent = {
    type:'external-html',
    url: "external-consent-"+lang+".html",
    cont_btn: "start"
};

var device_question = {
    type: "html-button-response",
    stimulus: strings_device[lang].stimulus,
    choices: strings_device[lang].choices,
    prompt: "",
    on_start: (function() {
      var err = calcFPS(
      {
          count: 60,
          callback: function(fps) {
            raw_FPS = fps;
            FPS = (1000 / round_fps(fps))
          }
      });
      if (err) {
        FPS = 1000 / 30;
      }
}),
    on_finish: (function(data) {
      if(data.button_pressed == "0"){
        device = "touchscreen"
        jsPsych.data.addProperties({'device': device});
      } else {
        device = "keyboard"
        jsPsych.data.addProperties({'device': device});
      }
      var instructions = {
          type:'instructions',
          pages: [gen_instructions(lang, device, leftIsUp)],
        show_clickable_nav: true,
        button_label_next: ">",
      };
      jsPsych.addNodeToEndOfTimeline({timeline: [instructions, gen_fullscreen(lang)] }, function() {});
    })
};

var timeline = [consent, device_question];

// For what duration should the graph be displayed? Based on the url
var graph_pt = 100;
if (window.location.search == "?slow") {
  graph_pt = 1000;
}

// Fully crossed factorial repeated design generation
var factors = {
  steepness: [-0.1875, -0.125, -0.0625, 0, 0.0625, 0.125, 0.1875],
  number_points: [6, 18, 38, 66],
  standard_deviation: [0.05, 0.1, 0.15, 0.2],
}

gen_bloc = function(crossed_design) {
  new_timeline = [];
  // Loop over cells in the design
  for (i = 0 ; i < crossed_design.length ; i++) {
    // Recover values
    beta = crossed_design[i].steepness
    n = crossed_design[i].number_points
    std = crossed_design[i].standard_deviation
    xvalues = [];
    yvalues = [];

    // Compute x, y points
    for (j = 0 ; j < n ; j++) {
      xvalue = j/(n-1) - 0.5
      yvalue = beta*xvalue + (randn_bm() * std) + 0.5

      // Reject extreme outliers
      while (yvalue <= -0.27 || yvalue >= +1.27) {
        yvalue = beta*xvalue + (randn_bm() * std) + 0.5
      }

      xvalues.push(xvalue);
      yvalues.push(yvalue);
    }

    // center for actual dots
    params = linear_regression_slope_ols(xvalues, yvalues);
    correction = (0.5 - params[0]);  // 0.5 is the center of the y axis

    // merge and apply correction
    points = []
    for (p = 0 ; p < xvalues.length ; p++) {
      points.push([xvalues[p], yvalues[p] + correction])
    }
    crossed_design[i].loop_number = loop_number;
    var trial = {
      type: 'regression',
      points: points,
      graph_pt: graph_pt,
      intercept: params[0],
      beta: params[1],
      data: crossed_design[i]
    }
    new_timeline.push(trial);
  }
  return new_timeline
}

var add_block_to_timeline = function() {
  loop_number += 1;
  new_crossed_design = jsPsych.randomization.factorial(factors, 1, false);
  new_timeline = gen_bloc(new_crossed_design);
  new_timeline.push(restart);
  jsPsych.addNodeToEndOfTimeline({timeline: new_timeline}, function() {});
}

// Do they want to restart?
var restart = {
    type: "html-button-response",
    stimulus: strings_restart[lang].stimulus,
    choices: strings_restart[lang].choices,
    prompt: "",
    on_start: function() {document.body.style.cursor = 'pointer'; },
    on_finish: (function(data) {
      document.body.style.cursor = 'none';
      if(data.button_pressed == "0"){
        add_block_to_timeline();
      } else {
        document.getElementById("jspsych-content").innerHTML = "";
      }
    })
};

jsPsych.init({
  timeline: timeline,
  show_progress_bar: false,
  show_preload_progress_bar: false,
  on_finish: finish_experiment,
  preload_images: ["./res/uparrow.png", "./res/downarrow.png"]
});

