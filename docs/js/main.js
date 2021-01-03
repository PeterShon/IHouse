import { moveUp } from '../js/move-up.js'
import { popups } from '../js/popups.js'
import { intro } from '../js/intro.js'
import { cardProduct } from '../js/card-product.js'
import { catalog } from '../js/catalog.js'
import { sliders } from '../js/sliders.js'
import { shiftWidget } from '../js/shift-widget.js'
import { productBody } from '../js/product-body.js'
import { card } from '../js/card.js'
import { feedback } from '../js/feedback.js'
import { feedbackPopup } from '../js/feedback-popup.js'
import { sendToTXT } from '../js/send-to-txt.js'
import { search } from '../js/search.js'
import { header } from '../js/header.js'


$(document).ready(() => {
  moveUp()
  popups()
  intro()
  cardProduct()
  catalog()
  sliders()
  shiftWidget()
  productBody()
  card()
  feedback()
  feedbackPopup()
  sendToTXT()
  search()
  header(popups)
  // eslint-disable-next-line no-console
})
