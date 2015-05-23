//nav 

$(document).ready(function() {
  $('#nav').onePageNav();
});

// sticky
  $(function () {

    $(window).scroll(function(event) {
      if($(this).scrollTop() > 150) {
      $("#sitckynavbar").fadeIn();
      $("#sitckynavbar").addClass('fixed',1000,'linear');
    }
    else {
      $("#sitckynavbar").removeClass('fixed')
    }
    });

  });