export function search() {
  let unit = document.querySelectorAll('.js_unit');
  let dust = document.querySelectorAll('.js_dust');
  if (unit.length > 0) {
    if (dust.length > 0) {
      for (let i = 0; i < dust.length; i++) {
        const el = dust[i]
        el.style.display = 'none'
      }
    }
  }
}