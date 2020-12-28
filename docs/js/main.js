import { moveUp } from '../js/move-up.js'
import { popups } from '../js/popups.js'
import { intro } from '../js/intro.js'
import { cardProduct } from '../js/card-product.js'
import { catalog } from '../js/catalog.js'
import { sliders } from '../js/sliders.js'

$(document).ready(() => {
  moveUp()
  popups()
  intro()
  cardProduct()
  catalog()
  sliders()
  // eslint-disable-next-line no-console
})