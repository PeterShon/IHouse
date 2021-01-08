export function productBody() {
  $('.product-body__gallery').magnificPopup({
    delegate: '.js_gallery-image', // child items selector, by clicking on it popup will open
    type: 'image',
    gallery: {
      enabled: true
    }
    // other options
  });
}