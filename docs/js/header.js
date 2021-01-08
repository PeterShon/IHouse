export function header(fPopups) {
  let nav = document.querySelector('.header__nav');
  let bodyofpage = document.querySelector('body');
  let burgerItem = document.querySelector('.header__burger');
  let header = document.querySelector('.header__inner')
  let pseudo = document.querySelector('.pseudo-item__link')
  let category = document.querySelectorAll('.js_category')
  burgerItem.addEventListener('click', burgerStateShow);
  changeLink();
  window.addEventListener('resize', changeLink)
  function burgerStateShow() {
    if (window.matchMedia("(max-width: 1350px)").matches) {
      if (!nav.classList.contains('header__nav_active')) {
        nav.classList.add('header__nav_active');
        burgerItem.classList.add('header__burger_active');
        header.classList.add('header__inner_active');
        bodyofpage.style.overflow = 'hidden';
      } else {
        nav.classList.remove('header__nav_active');
        burgerItem.classList.remove('header__burger_active');
        header.classList.remove('header__inner_active');
        bodyofpage.style.overflow = 'visible';
      }
    }
  }
  function changeLink() {

    if (window.matchMedia("(max-width: 890px)").matches) {
      pseudo.classList.add('js_popup-link');
      pseudo.href = "#popup-delivery"
      fPopups();
    } else {
      pseudo.classList.remove('js_popup-link');
      pseudo.href = "#"
    }

    for (let i = 0; i < category.length; i++) {
      let cat = category[i];
      if (window.matchMedia("(max-width: 1250px)").matches) {
        cat.classList.remove('js_popup-link');
        cat.href = "catalog.html"
      } else {
        cat.classList.add('js_popup-link');
        cat.href = "#popup-category"
        fPopups();
      }
    }

  }
}