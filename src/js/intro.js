export function intro() {
  function parallax(e) {
    let clientWidth = window.innerWidth
    let clientHeight = window.innerHeight
    let posX = -(-clientWidth / 2 + e.clientX)
    let posY = -(-clientHeight / 2 + e.clientY)
    let might = 100
    let might_0 = might * 0.15
    let might_1 = might * 0.3
    let might_2 = might * 1
    let might_3 = might * 1.5
    if (document.querySelector('.intro__bg')) {
      let bg = document.querySelector('.intro__bg')
      bg.style.background =
        `
      url(img/intro-el1.png) calc(-45% + ${posX / might_1}px) calc(135% + ${posY / might_1}px)/57% no-repeat,
      url(img/intro-el4.png) calc(112% + ${posX / might_1}px) calc(73% + ${posY / might_1}px)/32% no-repeat,
      url(img/intro-el2.png) calc(38.5% + ${posX / might_2}px) calc(20% + ${posY / might_1}px)/15% no-repeat,
      url(img/intro-el3.png) calc(66.5% + ${posX / might_2}px) calc(29% + ${posY / might_1}px)/18% no-repeat,
      url(img/intro-bg.jpg) center/cover no-repeat
      `
    }
    if (document.querySelector('.subscribe-section__bg')) {
      let bg_softness = document.querySelector('.subscribe-section__bg')
      bg_softness.style.background = `linear-gradient(rgba(205, 247, 249, 0.2), rgba(205, 247, 249, 0.2)), url(img/softness.jpg) 50% calc(50% + ${posX / might_0}px)/cover no-repeat`
    }
  }
  setTimeout(() => {
    document.addEventListener('mousemove', parallax)
  }, 0);
}