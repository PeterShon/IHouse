/*import $ from '../local_modules/jquery/dist/jquery.min'
не забудь написать 'export' перед отправляемой функцией
import { название функции } from '../js/файл.js'*/

$(document).ready(() => {
  // eslint-disable-next-line no-console
  console.log(`document ready`)
})

$(`.header__adress`).slick({
  speed: 300,
  autoplay: true,
  autoplaySpeed: 1500,
  fade: true,
  cssEase: 'linear',
  accessibility: false,
  arrows: false,

})
