//nav 

$(document).ready(function() {
  $('#nav').onePageNav();
});

// sticky
  //$(function () {

    //$(window).scroll(function(event) {
      //if($(this).scrollTop() > 150) {
      //$("#sitckynavbar").fadeIn();
      //$("#sitckynavbar").addClass('fixed',1000,'linear');
    //}
    //else {
     // $("#sitckynavbar").removeClass('fixed')
    //}
    //});
  //});

  $(document).ready(function () {
  var $nav = $('#stickynavbar'),
      posTop = $nav.position().top;
  $(window).scroll(function () {
    var y = $(this).scrollTop();
    if (y > posTop) { $nav.addClass('fixed'); }
    else { $nav.removeClass('fixed'); }
  });
});