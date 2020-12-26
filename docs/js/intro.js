export function intro() {
  function parallax(e) {
    let bg = document.querySelector('.intro__bg')
    let clientWidth = window.innerWidth
    let clientHeight = window.innerHeight
    //console.log([clientWidth, clientHeight])
    let posX = -(-clientWidth / 2 + e.clientX)
    let posY = -(-clientHeight / 2 + e.clientY)
    let might = 100
    let might_1 = might * 0.3
    let might_2 = might * 1
    bg.style.background =
      `
    url(img/intro-el1.png) calc(-45% + ${posX / might_1}px) calc(135% + ${posY / might_1}px)/57% no-repeat,
    url(img/intro-el4.png) calc(112% + ${posX / might_1}px) calc(73% + ${posY / might_1}px)/32% no-repeat,
    url(img/intro-el2.png) calc(38.5% + ${posX / might_2}px) calc(20% + ${posY / might_1}px)/15% no-repeat,
    url(img/intro-el3.png) calc(66.5% + ${posX / might_2}px) calc(29% + ${posY / might_1}px)/18% no-repeat,
    url(img/intro-bg.jpg) center/cover no-repeat
    `
  }
  setTimeout(() => {
    document.addEventListener('mousemove', parallax)
  }, 0);
}