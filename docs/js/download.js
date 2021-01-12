let body = document.querySelector('body')
body.classList.add("lock")

window.addEventListener('load', () => {
  console.log('страница загрузинилась')
  let download = document.querySelector('.download')
  download.classList.add('download_unactive')
  body.classList.remove("lock")
})