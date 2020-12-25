import { moveUp } from '../js/move-up.js'

$(document).ready(() => {
  moveUp()
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
