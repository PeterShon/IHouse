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
  })

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

  $(`.brand-slider__slider`).slick({
    centerMode: true,
    slidesToShow: 4,
    slidesToScroll: 0,
    speed: 7000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: `linear`,
    arrows: false
  })
}