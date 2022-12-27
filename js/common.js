
  $(".hamburgermenu").click(function () {
    $(".nav").slideToggle();
  });

  $(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    if (scroll > 0) {
      $(".headerContainer").addClass("headerBGColor");
    } else {
      $(".headerContainer").removeClass("headerBGColor");
    }
  });





