import { card } from "./card";

export function collections() {
  const tabPanel = document.querySelector('.collections__panel')
  const tabs = tabPanel.querySelectorAll('.collections__button')

  tabEvent(tabs[0])

  for (let i = 0; i < tabs.length; i++) {
    const tab = tabs[i];
    tab.addEventListener('click', tabEvent)
  }

  function tabEvent(tab) {
    const cards = document.querySelectorAll('.collections__cards')
    let position = 1

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