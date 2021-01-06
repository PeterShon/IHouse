/* modal window */
//код написан при поддержке этого ролика https://www.youtube.com/watch?v=qoO1ZNi1LyI
export function popups() {
  const popupLinks = document.querySelectorAll(".js_popup-link");
  const body = document.querySelector("body");
  const lockPadding = document.querySelectorAll(".js_lock-padding"); //константа для сбора объектов, которым дать паддинг ширины скролла (например фиксированный header)

  let unlock = true;

  const timeout = 300;

  popupsFilter(false)

  if (popupLinks.length > 0) {
    for (let index = 0; index < popupLinks.length; index++) {
      const popupLink = popupLinks[index];
      popupLink.addEventListener("click", function (e) {
        const popupName = popupLink.getAttribute("href").replace("#", "");
        const curentPopup = document.getElementById(popupName);
        popupOpen(curentPopup, e.target);
        if (popupLink.classList.contains('js_popup-link')) {
          e.preventDefault(); //запрет перезагружать страницу
        }
      });
    }
  }

  const popupCloseIcon = document.querySelectorAll(".popup__close");
  if (popupCloseIcon.length > 0) {
    for (let index = 0; index < popupCloseIcon.length; index++) {
      const e1 = popupCloseIcon[index];
      e1.addEventListener("click", function (e) {
        popupClose(e1.closest(".popup")); //передача в функцию ближайшего родителя с классом 'popup'
        e.preventDefault(); //запрет перезагружать страницу
      });
    }
  }

  function popupOpen(curentPopup, curentButton) {
    if (curentPopup && unlock) {
      const popupActive = document.querySelector(".popup.open");
      if (popupActive) {
        popupClose(popupActive, false);
      } else {
        bodyLock();
      }
      if (curentButton.closest('.card-product')) {
        let curentCard = curentButton.closest('.card-product')
        let curentProduct = curentCard.querySelector('.card-product__header').innerHTML
        let productBox = curentPopup.querySelector('.popup__product-name')
        let productTitle = curentPopup.querySelector('.popup__feedback-title')
        if (curentPopup.querySelector('.popup__feedback-form')) {
          productBox.value = curentProduct;
          productTitle.innerHTML = curentProduct;
        }
      }
      curentPopup.classList.add("open");
      if (curentPopup.querySelector('.js_focus')) {
        setTimeout(() => {
          document.querySelector(".js_focus").focus();
        }, 200);
      }
      if (curentPopup.classList.contains('js_close')) {
        setTimeout(() => {
          popupClose(curentPopup)
        }, 2000);
      }
      curentPopup.addEventListener("click", function (e) {
        if (!e.target.closest(".popup__content")) {
          popupClose(e.target.closest(".popup"));
        }
      });
    }
  }

  function popupClose(popupActive, doUnlock = true) {
    if (unlock) {
      popupActive.classList.remove("open");
      if (doUnlock) {
        bodyUnLock();
        popupsFilter(popupActive)
      }
    }
  }

  function bodyLock() {
    const lockPaddingValue =
      window.innerWidth - document.querySelector("body").offsetWidth + "px";

    if (lockPadding.length > 0) {
      for (let index = 0; index < lockPadding.length; index++) {
        const e1 = lockPadding[index];
        e1.style.paddingRight = lockPaddingValue;
      }
    }
    body.style.paddingRight = lockPaddingValue;
    body.classList.add("lock");

    /*фикс ошибки, если во время действия анимации закрытия быстро пытаться открывать новую модалку*/
    unlock = false;
    setTimeout(function () {
      unlock = true;
    }, timeout);
  }

  function bodyUnLock() {
    setTimeout(function () {
      if (lockPadding.length > 0) {
        for (let index = 0; index < lockPadding.length; index++) {
          const e1 = lockPadding[index];
          e1.style.paddingRight = "0px";
        }
      }
      body.style.paddingRight = "0px";
      body.classList.remove("lock");
    }, timeout);

    /*фикс ошибки, если во время действия анимации закрытия быстро пытаться открывать новую модалку*/
    unlock = false;
    setTimeout(function () {
      unlock = true;
    }, timeout);
  }

  //закрытие модалки по escape
  if (document.querySelector(".popup.open")) {
    document.addEventListener("keydown", function (e) {
      if (e.which === 27) {
        const popupActive = document.querySelector(".popup.open");
        popupClose(popupActive);
      }
    });
  }

  function popupsFilter(curentPopup) {
    const notification = document.querySelector('#popup-notification-filter')
    const durationsTime = 3000;
    //нажатие на кнопки
    popupFilterButtons()
    checkboxes()
    //кнопки
    function popupFilterButtons() {
      const notification = document.querySelector('#popup-notification-filter')
      const popupFilters = document.querySelectorAll('.popup_filter')
      if (popupFilters) {
        for (let i = 0; i < popupFilters.length; i++) {
          const popup = popupFilters[i];
          const buttons = popup.querySelectorAll('button')
          if (buttons) {
            for (let i = 0; i < buttons.length; i++) {
              const button = buttons[i];
              button.addEventListener('click', (e) => {
                notification.innerHTML = 'фильтр "' + e.target.innerHTML + '" выбран'
                notification.classList.remove('notification_play')
                notification.classList.add('notification_play')
                setTimeout(() => {
                  notification.classList.remove('notification_play')
                }, 3000);
              })
            }
          }
        }
      }
    }

    function checkboxes() {
      if (curentPopup) {
        const popupCloser = curentPopup.querySelector('.popup__close')
        if (curentPopup.classList.contains('popup_filter')) {
          //нажатие на чекбоксы
          const chbs = curentPopup.querySelectorAll('.js_filter-chb')
          let chb_counter = 0;
          chbNotification()
          function chbNotification() {
            for (let i = 0; i < chbs.length; i++) {
              const chb = chbs[i];
              if (chb.checked) {
                chb_counter++
              }
            }
            if (chb_counter > 0) {
              notification.innerHTML = 'в разделе "' + popupCloser.innerHTML + '" выбрано опций: ' + chb_counter;
              notification.classList.remove('notification_play')
              notification.classList.add('notification_play')
              setTimeout(() => {
                notification.classList.remove('notification_play')
              }, durationsTime);
            }
            chb_counter = 0;
          }
        }
      }
    }
  }


  //фильтры
  openFilterBlock()
  checkForChildren()
  checkOffChildren()
  //сворачивание и разворачивание эл-ов
  function openFilterBlock() {
    $('.popup__filter-arrow').unbind().click(function (e) {
      if ($(this).parent(".popup__filter-item").hasClass('js_open')) {
        $(this).parent(".popup__filter-item").next($('.popup__filter-item_to-lvl2')).slideUp();
        $(this).parent(".popup__filter-item").removeClass('js_open');
      } else {
        $('.popup__filter-arrow').parent(".popup__filter-item").next($('.popup__filter-item_to-lvl2')).slideUp();
        $('.popup__filter-arrow').parent(".popup__filter-item").removeClass('js_open');
        $(this).parent(".popup__filter-item").next($('.popup__filter-item_to-lvl2')).slideDown();
        $(this).parent(".popup__filter-item").addClass('js_open');
      }
    })
  }
  //чекбоксы для детей
  function checkForChildren() {
    $('.popup__filter-item').find('.js_filter-chb').click(function (e) {
      if (!($(this).closest('.popup__filter-item_to-lvl2').length)) {
        if ($(this).is(':checked')) {
          $(this)
            .closest('.popup__filter-item')
            .next('.popup__filter-item_to-lvl2')
            .find('.js_filter-chb')
            .prop('checked', true)
        } else {
          $(this)
            .closest('.popup__filter-item')
            .next('.popup__filter-item_to-lvl2')
            .find('.js_filter-chb')
            .prop('checked', false)
        }
      }
    })
  }
  //чекбокс для родителя
  function checkOffChildren() {
    $('.popup__filter-item').find('.js_filter-chb').click(function (e) {
      if (($(this).closest('.popup__filter-item_to-lvl2').length)) {
        let main_chb =
          $(this)
            .closest('.popup__filter-list')
            .closest('.popup__filter-item')
            .prev('.popup__filter-item')
            .find('.js_filter-chb')
        let neighbour_chb = $(this).closest('.popup__filter-list').find('.js_filter-chb')
        let counter = 0;
        for (let i = 0; i < neighbour_chb.length; i++) {
          const el = neighbour_chb[i];
          counter = counter + $(el).is(':checked')
        }
        if (neighbour_chb.length != counter) {
          main_chb.prop('checked', false)
        } else {
          main_chb.prop('checked', true)
        }
      }
    })
  }

  //полифиллы
  (function () {
    //проверяем поддержку
    if (!Element.prototype.closest) {
      //реализуем
      Element.prototype.closest = function (css) {
        var node = this;
        while (node) {
          if (node.matches(css)) return node;
          else node = node.parentElement;
        }
        return null;
      };
    }
  })();
  (function () {
    //проверяем поддержку
    if (!Element.prototype.matches) {
      //определяем свойство
      Element.prototype.matches =
        Element.prototype.matchesSelector ||
        Element.prototype.webkitMatchesSelector ||
        Element.prototype.mozMatchesSelector ||
        Element.prototype.msMatchesSelector;
    }
  })();
}