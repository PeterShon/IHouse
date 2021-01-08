export function cardProduct() {
  if (document.querySelector('.card-product')) {
    function showSale() {
      let sales = document.querySelectorAll('.card-product__sale')
      sales.forEach(el => {
        if (el.getAttribute('data-sale')) {
          el.classList.add('card-product__sale_active')
        }
      });
    }
    showSale()
  }
}