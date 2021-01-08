export function catalog() {
  // range
  let $range = $(`.js_price-range`),
    $inputFrom = $(`.js_price-before`),
    $inputTo = $(`.js_price-after`),
    instance,
    min = $range.min,
    max = $range.max,
    from = 0,
    to = 0

  $range.ionRangeSlider({
    skin: `round`,
    type: `double`,
    min: $range.min,
    max: $range.max,
    from: min,
    to: max,
    onStart: updateInputs,
    onChange: updateInputs
  })
  instance = $range.data(`ionRangeSlider`)

  function updateInputs(data) {
    from = data.from
    to = data.to

    $inputFrom.prop(`value`, from)
    $inputTo.prop(`value`, to)
  }

  $inputFrom.on(`input`, function () {
    let val = $(this).prop(`value`)

    // range - validate
    if (val < min) {
      val = min
    } else if (val > to) {
      val = to
    }

    instance.update({
      from: val
    })
  })

  $inputTo.on(`input`, function () {
    let val = $(this).prop(`value`)

    // range - validate
    if (val < from) {
      val = from
    } else if (val > max) {
      val = max
    }

    instance.update({
      to: val
    })
  })
}
