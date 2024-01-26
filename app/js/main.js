$(function () {

  let $page = $('html, body');
  $('.page-navigation__link, .logo').click(function () {
    $page.animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 800);
    return false;
  });

  $(".grade").rateYo({
    starWidth: "16px",
    normalFill: "#C1C1C1",
    ratedFill: "#FFB800"
  });

  $('.tabs__tab').on('click', function (e) {
    e.preventDefault();
    $('.tabs__tab').removeClass('tabs__tab--active');
    $(this).addClass('tabs__tab--active');

    $('.tabs__item').removeClass('tabs__item--active');
    $($(this).attr('href')).addClass('tabs__item--active');
  });

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

  $('.special-offer__slider').slick({
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          arrows: false,
          dots: true,
        }
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 2,
          arrows: false,
          dots: true,
        }
      }
    ]

  });

  $('.reviews__slider-wrap').slick({
    dots: true,
    infinite: false,
    responsive: [
      {
        breakpoint: 768,
        dots: false,
      }
    ]
  });

  $('.burger').click(function () {
    $('.menu-mob').addClass('menu-mob--active');
    $('body').addClass('lock');
  });

  $('.menu-mob__close, .page-navigation__link').click(function () {
    $('.menu-mob').removeClass('menu-mob--active');
    $('body').removeClass('lock');
  });
});

window.onscroll = function headerFixed() {
  let header = document.querySelector('.header__wrapper');

  if (window.pageYOffset > 20) {
    header.classList.add('header__wrapper--fixed');
  } else {
    header.classList.remove('header__wrapper--fixed');
  }
}

if (document.getElementById('counter')) {
  let plus = document.querySelector('.product-info__plus');
  let minus = document.querySelector('.product-info__minus');

  plus.addEventListener('click', function () {
    let output = document.querySelector('.product-info__quantity');
    let resault = Number(output.textContent) + 1;
    output.textContent = resault;
  });

  minus.addEventListener('click', function () {
    let output = document.querySelector('.product-info__quantity');
    let resault = Number(output.textContent) - 1;

    if (resault >= 1) {
      output.textContent = resault;
    }
  });
};


document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const menuMob = document.querySelector('.menu-mob');

  document.addEventListener('click', function (e) {
    if (e.target !== burger && e.target !== menuMob) {
      menuMob.classList.remove('menu-mob--active');
      document.body.classList.remove('lock');
    }
  });

});

if (document.getElementById('filter')) {
  document.addEventListener('DOMContentLoaded', () => {
    const filterOpen = document.querySelector('.catalog__filter-open');
    const filterCloose = document.querySelector('.filter__close');
    const filter = document.querySelector('.filter');

    filterOpen.addEventListener('click', (e) => {
      e.stopPropagation();
      filter.classList.add('filter--active');
      document.body.classList.add('lock-r');

    });

    filterCloose.addEventListener('click', () => {
      filter.classList.remove('filter--active');
      document.body.classList.remove('lock-r');
    });

    document.addEventListener('click', function (e) {
      if (!filter.contains(e.target) && e.target !== filterOpen) {
        filter.classList.remove('filter--active');
        document.body.classList.remove('lock-r');
      }
    });

  });
};

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

if (window.location.pathname === '/index.html') {
  document.getElementById('home').href = "#!";
}

if (window.location.pathname === '/catalog.html') {
  document.getElementById('catalog').href = "#!";
  document.getElementById('catalog-bread-crumbs').href = "#!";
  document.getElementById('pagination-active').href = "#!";
  document.getElementById('pagination-active-arrow').href = "#!";
}

if (window.location.pathname === '/product.html') {

  Fancybox.bind('[data-fancybox="gallery"]', {
    Thumbs: false,
    Toolbar: false,

    closeButton: "top",
    Carousel: {
      Dots: true,
    },
  });
};

if (document.getElementById('mix')) {
  var mixer = mixitup('.popular-categories__content');
  mixer.filter('.category-burger');
};








