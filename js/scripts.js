$(document).ready(function() {
  var over4 = confirm("Are you at least 4' tall? Click OK if so, click Cancel if no.");
  var under7 = confirm("Are you under 7' tall? Click OK if so, click Cancel if no.")

  if (over4) {
    $('#roller, #swing').show();
  } else {
    $('#wheel, #bumper').show();
  }
  if (under7) {
    $('#roller, #swing, #wheel, #bumper').show();
  } else {
    $('#roller, #swing, #wheel').show();
  }
});
