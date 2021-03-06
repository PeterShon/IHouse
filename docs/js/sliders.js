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
    slidesToScroll: 1,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: `ease-out`,
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
    // if (!$('.collections__panel').hasClass('slick-slider')) {
    //   $('.collections__panel').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     speed: 1000,
    //     cssEase: `linear`,
    //     focusOnSelect: true,
    //     mobileFirst: true,
    //     responsive: [
    //       {
    //         breakpoint: 790,
    //         settings: 'unslick'
    //       }
    //     ]
    //   });
    // }

    // $('.collections__panel').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    //   console.log('hello');
    // });

    if (!$('.catalog-header__panel').hasClass('slick-slider')) {
      $('.catalog-header__panel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
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
  }

  function slickifymin() {
    if (!$('.product-body__galery-box').hasClass('slick-slider')) {
      $('.product-body__galery-box').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '80px',
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: `linear`,
        focusOnSelect: true,
        mobileFirst: true,
        arrows: false,
        responsive: [
          {
            breakpoint: 425,
            settings: 'unslick'
          }
        ]
      });
    }
  }

  slickify();
  slickifymin();
  $(window).resize(function () {
    var $windowWidth = $(window).width();
    if ($windowWidth < 790) {
      slickify();
    }
    if ($windowWidth < 425) {
      slickifymin();
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
}