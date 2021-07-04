$(function () {
  $(".fleche-bas").click(function () {
    var speed = 500;
    $("html, body").animate({ scrollTop: $(this).offset().top + 30 }, speed);
    return false;
  });

  $(".burger").click(function () {
    $(".menu-mobile").slideToggle();
  });

  $(".button-voir-plus").click(function () {
    $(".suite-histoire").slideDown();
    $(".button-voir-moins").css("display", "block");
    $(".button-voir-plus").css("display", "none");
  });

  $(".button-voir-moins").click(function () {
    $(".suite-histoire").slideUp("slow", function () {
      $(".button-voir-moins").css("display", "none");
      $(".button-voir-plus").css("display", "block");
    });
  });

  $(".filtre-mobile").click(function () {
    $(".filtre-mobile-open").slideUp("slow", function () {
      $(".global").css("display", "none");
      $(".filtre-mobile-open").css("display", "block");
      $(".container-shoes").css("display", "none");
      $("footer").css("display", "none");
    });
  });

  $(".button-filtre-open-up").click(function () {
    $(".filtre-mobile-open").slideDown("slow", function () {
      $(".global").css("display", "block");
      $(".filtre-mobile-open").css("display", "none");
      $(".container-shoes").css("display", "flex");
      $("footer").css("display", "block");
    });
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $(".filtre-mobile").css("display", "block");
    } else {
      $(".filtre-mobile").css("display", "none");
    }
  });
});
