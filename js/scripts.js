$(document).ready(function() {
  var over4 = confirm("Are you at least 4' tall? Click OK if so, click Cancel if no.");


  if (over4) {
    $('#rides').show();
    $('li').removeClass();
    $('li').addClass(".over4");
    $('.under4').hide();
  } else {
    $("#rides").show();
    $('li').removeClass();
    $('li').addClass('.under4');
    $('.over4').hide();
  }
});
