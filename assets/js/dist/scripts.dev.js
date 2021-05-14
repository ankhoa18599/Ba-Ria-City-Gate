"use strict";

$(document).ready(function () {
  $(".navbar-item .item-list").click(function (t) {
    $(".navbar-item li .main").not(this).removeClass("hover-item-nav"), $(".logo-text").hide(), $(".logo-text-black").addClass("d-il-block"), $(".navbar-fixed-top .main").addClass("active-item");
    $(".navbar-fixed-top").addClass("white-navbar"), $(this).children(".main").toggleClass("hover-item-nav"), $(this).children(".main").children(".fa-chevron-down").toggleClass("rot-X"), $(this).children(".drop-down-menu").toggle(), $(".item-dropdown").not(this).children(".drop-down-menu").hide(), $(".setupnow").addClass("hover-btn-setupnow"), $("main, footer, .drop-down-menu").click(function () {
      $(".navbar-fixed-top").removeClass("white-navbar"), $(".navbar-fixed-top .main").removeClass("active-item"), $(".drop-down-menu").hide(), $(".logo-text").show(), $(".logo-text-black").removeClass("d-il-block"), $(".main").removeClass("hover-item-nav"), $(".fa-chevron-down").removeClass("rot-X");
    });
  });
});
$(document).ready(function () {
  $(window).scroll(function (event) {
    var pos_body = $('html,body').scrollTop(); // console.log(pos_body);

    if (pos_body > 0) {
      $(".navbar-fixed-top").addClass("white-navbar position-fixed top-0"), $(".navbar-fixed-top .main").addClass("active-item"), $(".logo-text").hide(), $(".logo-text-black").addClass("d-il-block"), $(".setupnow").addClass("hover-btn-setupnow"), $(".drop-down-menu").css("top", "80px");
    } else {
      $('.navbar-fixed-top').removeClass("white-navbar position-fixed top-0");
      $(".navbar-fixed-top .main").removeClass("active-item"), $(".logo-text").show(), $(".logo-text-black").removeClass("d-il-block"), $(".setupnow").removeClass("hover-btn-setupnow"), $(".drop-down-menu").css("top", "118px"), $('main').trigger('click'), $(".fa-chevron-down").removeClass("rot-X");
    }
  });
});