var testme;
finish_experiment = function(data) {
  document.body.style.cursor = 'pointer';
  try {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  } catch(e) {
    // Ignore : not being able to exit fullscreen means we're already not in
    // fullscreen which is OK
  }
  hide_score();
  console.log(data);
  vals = data.values()
  len = vals.length
  actual_len = 0;
  score = 0;
  rts = [];
  for (i = 0 ; i < len ; i++) {
    score += (vals[i].correct ? 1 : 0)
    actual_len += (vals[i].trial_type == "regression" ? 1 : 0)
    if (vals[i].trial_type == "regression") {
      rts.push(vals[i].rt)
    }
  }
  var sensitivity = computeSensitivity(vals);
  jsPsych.data.addProperties({'sensitivity': sensitivity});
  data.localSave("csv", "data_"+subject_id+".csv")
  content = document.getElementById("jspsych-content");
  add_congrats(content, score, total_score, sensitivity);
}
