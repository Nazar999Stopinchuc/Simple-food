$(function () {

  $('.catalog__select').styler({

  });

  $(window).on('load resize', function () {
    if ($(window).width() < 768) {
      $('.best-restaurants__list:not(.slick-initialized)').slick({
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        speed: 1500
      });
    } else {
      $('.best-restaurants__list.slick-initialized').slick('unslick');
    }
  });

  $(window).on('load resize', function () {
    if ($(window).width() < 768) {
      $('.discount__wrap:not(.slick-initialized)').slick({
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        speed: 1500
      });
    } else {
      $('.discount__wrap.slick-initialized').slick('unslick');
    }
  });

  $('.reviews__slider-wrap').slick({
    dots: true,
    infinite: false,
    responsive: [
      {
        breakpoint: 768,
        dots: false
      }
    ]
  });

});

document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const burgerClose = document.querySelector('.menu-mob__close');
  const menuMob = document.querySelector('.menu-mob');

  burger.addEventListener('click', () => {
    menuMob.classList.add('menu-mob--active');
    document.body.classList.add('lock');

  });

  burgerClose.addEventListener('click', () => {
    menuMob.classList.remove('menu-mob--active');
    document.body.classList.remove('lock');
  });

  document.addEventListener('click', function (e) {
    if (e.target !== burger && e.target !== menuMob) {
      menuMob.classList.remove('menu-mob--active');
      document.body.classList.remove('lock');
    }
  });

});

document.addEventListener('DOMContentLoaded', () => {
  const filterOpen = document.querySelector('.catalog__filter-open');
  const filterCloose = document.querySelector('.filter__close');
  const filter = document.querySelector('.filter');

  filterOpen.addEventListener('click', () => {
    filter.classList.add('filter--active');
    document.body.classList.add('lock-r');

  });

  filterCloose.addEventListener('click', () => {
    filter.classList.remove('filter--active');
    document.body.classList.remove('lock-r');
  });

});


var $range = $(".filter-price__input"),
  $inputFrom = $(".filter-price__number--from"),
  $inputTo = $(".filter-price__number--to"),
  instance,
  min = 0,
  max = 1200,
  from = 100,
  to = 1000;

$range.ionRangeSlider({
  type: "double",
  min: min,
  max: max,
  from: 200,
  to: 800,
  onStart: updateInputs,
  onChange: updateInputs
});
instance = $range.data("ionRangeSlider");

function updateInputs(data) {
  from = data.from;
  to = data.to;

  $inputFrom.prop("value", from);
  $inputTo.prop("value", to);
}

$inputFrom.on("input", function () {
  var val = $(this).prop("value");

  if (val < min) {
    val = min;
  } else if (val > to) {
    val = to;
  }

  instance.update({
    from: val
  });
});

$inputTo.on("input", function () {
  var val = $(this).prop("value");

  if (val < from) {
    val = from;
  } else if (val > max) {
    val = max;
  }

  instance.update({
    to: val
  });
});


var mixer = mixitup('.popular-categories__content');
mixer.filter('.category-burger');


