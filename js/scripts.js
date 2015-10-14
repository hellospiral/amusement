$(document).ready(function() {
  var height = parseInt(prompt("How many feet tall are you?"));

 if (height > 4) {
   $('#over4').show();
 } if (height === 4) {
   $('#exactly4').show();
 } if (height < 4) {
   $('#under4').show();
 }
});
