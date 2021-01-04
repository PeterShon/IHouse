export function sliders() {
  //sliders

  $(`.header__adress`).slick({
    speed: 300,
    autoplay: true,
    autoplaySpeed: 1500,
    fade: true,
    cssEase: `linear`,
    accessibility: false,
    arrows: false,

  })

  $(`.product-slider__card-box-inner`).slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: `linear`,
    responsive: [
      {
        breakpoint: 1380,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '250px',
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '200px',
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '150px',
          speed: 1000,
          autoplaySpeed: 2000,
          cssEase: `linear`,
        }
      },
      {
        breakpoint: 660,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '100px',
          speed: 1000,
          autoplaySpeed: 2000,
          cssEase: `linear`,
        }
      },
      {
        breakpoint: 470,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '50px',
          speed: 1000,

          autoplaySpeed: 2000,
          cssEase: `linear`,
        }
      }
    ]
  })
  $(`.product-slider__card-box-inner`).slick("refresh");

  $(`.collections__cards-slider`).slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 10000,
    cssEase: `linear`,
    arrows: false,
    fade: true,
    asNavFor: `.collections__pagination-slider`
  })

  $(`.collections__pagination-slider`).slick({
    centerMode: true,
    centerPadding: `5px`,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 10000,
    cssEase: `linear`,
    asNavFor: `.collections__cards-slider`,
    focusOnSelect: true
  })

  function slickify() {
    $('.collections__panel').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 1000,
      autoplay: true,
      autoplaySpeed: 10000,
      cssEase: `linear`,
      focusOnSelect: true,
      mobileFirst: true,
      responsive: [
        {
          breakpoint: 790,
          settings: 'unslick'
        }
      ]
    })
  }
  slickify();
  $(window).resize(function () {
    var $windowWidth = $(window).width();
    if ($windowWidth < 790) {
      slickify();
    }
  });

  $(`.brand-slider__slider`).slick({
    centerMode: true,
    slidesToShow: 4,
    slidesToScroll: 0,
    speed: 7000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: `linear`,
    arrows: false,
    responsive: [
      {
        breakpoint: 1380,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          centerMode: true,
          centerPadding: '150px'
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          centerMode: true,
          centerPadding: '100px'
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          centerMode: true,
          centerPadding: '50px',
          speed: 5000
        }
      },
      {
        breakpoint: 430,
        settings: {
          slidesToShow: 2,
          centerMode: false,
          speed: 5000
        }
      }]
  })

  $(`.pagination__slider`).slick({
    centerMode: true,
    centerPadding: `5px`,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 1000,
    cssEase: `linear`,
    focusOnSelect: true
  })
}