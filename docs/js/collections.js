export function collections() {
  if (document.querySelector('.collections__panel')) {
    const tabPanel = document.querySelector('.collections__panel')
    const tabs = tabPanel.querySelectorAll('.collections__button')
    const cards = document.querySelectorAll('.collections__cards')
    let position = 0

    tabEvent(tabs[0])
    arrowEvent()

    for (let i = 0; i < tabs.length; i++) {
      const tab = tabs[i];
      tab.addEventListener('click', tabEvent)
    }

    function arrowEvent() {
      const arrowPrev = document.querySelector('.collections__arrow_prev')
      const arrowNext = document.querySelector('.collections__arrow_next')
      arrowPrev.addEventListener('click', changeSlide)
      arrowNext.addEventListener('click', changeSlide)

      function changeSlide(e) {
        //увеличиваю шаг позиции
        if (e.target == arrowPrev) {
          position = position - 1
        } else {
          position = position + 1
        }

        //если шаг выше количества табов, то снова шаг 1
        if (position > (tabs.length - 1)) {
          position = 0
        } else if (position == -1) {
          position = (tabs.length - 1)
        }

        for (let i = 0; i < tabs.length; i++) {
          const tabItem = tabs[i];
          const card = cards[i];
          tabItem.classList.remove('collections__button_active')
          card.classList.remove('collections__cards_active')
        }

        tabs[position].classList.add('collections__button_active')
        cards[position].classList.add('collections__cards_active')

        $(`.collections__cards-slider`).slick("refresh");
        $(`.collections__pagination-slider`).slick("refresh");
      }
    }


    function tabEvent(tab) {
      for (let i = 0; i < tabs.length; i++) {
        const tabItem = tabs[i];
        const card = cards[i];
        tabItem.classList.remove('collections__button_active')
        card.classList.remove('collections__cards_active')

        if (tab.target !== undefined) {
          if (tab.target == tabItem) {
            position = i
          }
        }
      }

      if (tab.target !== undefined) {
        tab.target.classList.add('collections__button_active')
        cards[position].classList.add('collections__cards_active')
      } else {
        tab.classList.add('collections__button_active')
        cards[0].classList.add('collections__cards_active')
      }
      $(`.collections__cards-slider`).slick("refresh");
      $(`.collections__pagination-slider`).slick("refresh");
    }
  }
}