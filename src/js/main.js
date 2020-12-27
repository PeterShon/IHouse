import { moveUp } from '../js/move-up.js'
import { popups } from '../js/popups.js'
import { intro } from '../js/intro.js'
import { cardProduct } from '../js/card-product.js'

$(document).ready(() => {
  moveUp()
  popups()
  intro()
  cardProduct()
  // eslint-disable-next-line no-console
})

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
  speed: 400,
  autoplay: true,
  autoplaySpeed: 5000,
  cssEase: `linear`,
})

$(`.collections__cards-slider`).slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 2000,
  autoplay: true,
  autoplaySpeed: 10000,
  cssEase: `linear`,
  arrows: false,
  asNavFor: `.collections__pagination-slider`
})

$(`.collections__pagination-slider`).slick({
  centerMode: true,
  centerPadding: `5px`,
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 300,
  autoplay: true,
  autoplaySpeed: 10000,
  cssEase: `linear`,
  asNavFor: `.collections__cards-slider`,
  focusOnSelect: true
})
