$(document).ready(function () {
  $("body").css("opacity", "0");
  $("body").animate({ opacity: '1' }, 1000);

  $(".mobile_btn").on('click', function () {
    $(".mobile_btn").hide();
    $('#mobile_menu').fadeToggle(300);
  });
  $(".close_mobile_btn").on('click', function () {
    $(".mobile_btn").show();
    $('#mobile_menu').fadeToggle(300);
  });

});

function resetMenu() {
  $("#mobile_menu").hide();
  $(".mobile_btn").show();
}
