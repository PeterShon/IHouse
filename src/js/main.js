import { moveUp } from '../js/move-up.js'
import { popups } from '../js/popups.js'
import { intro } from '../js/intro.js'

$(document).ready(() => {
  moveUp()
  popups()
  intro()
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
