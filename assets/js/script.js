"use strict";

$(document).ready(function () {
  $(".tab-header .item").click(function () {
    $(".active-tab").removeClass("active-tab");
    $(this).addClass("active-tab");

    let dataId = $(this).data("id");

    $(".tab-content .item").each(function () {
      if ($(this).data("id") === dataId) {
        $(this).removeClass("d-none");
      } else {
        $(this).addClass("d-none");
      }
    });
  });

  function rightSlider() {
    let activeSlider = $(".active-slider");

    if (activeSlider.next().length > 0) {
      activeSlider.removeClass("active-slider");
      activeSlider.next().addClass("active-slider");
    } else {
      activeSlider.removeClass("active-slider");
      activeSlider.parent().children().first().addClass("active-slider");
    }
  }

  function leftSlider() {
    let activeSlider = $(".active-slider");

    if (activeSlider.prev().length > 0) {
      activeSlider.removeClass("active-slider");
      activeSlider.prev().addClass("active-slider");
    } else {
      activeSlider.removeClass("active-slider");
      activeSlider.parent().children().last().addClass("active-slider");
    }
  }

  $(".slider .icons i:nth-child(2)").click(rightSlider);

  $(".slider .icons i:nth-child(1)").click(leftSlider);

  setInterval(() => {
    rightSlider();
  }, 4000);
});
