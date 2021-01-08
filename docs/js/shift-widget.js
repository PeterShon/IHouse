export function shiftWidget() {
  $(document).ready(function () {
    $('.js_shift-header').click(function (event) {
      $('.js_shift-header').not($(this)).parent('.js_shift').removeClass('shift-widget_active');
      $('.js_shift-header').not($(this)).parent('.js_shift').children('.js_shift-body').slideUp(300);
      if (!$(this).closest('.shift-widget_active').length) {
        $(this).parent('.shift-widget').children('.js_shift-body').slideToggle(300);
        $(this).parent('.shift-widget').addClass('shift-widget_active');
      } else {
        $(this).parent('.shift-widget').removeClass('shift-widget_active');
        $(this).parent('.shift-widget').children('.js_shift-body').slideToggle(300);
      }
    });
    $(document).click(function (e) {
      var div = $(".js_shift");
      if (!div.is(e.target)
        && div.has(e.target).length === 0) {
        $('.js_shift').children('.js_shift-body').slideUp(300);
        $('.js_shift').not($(this)).removeClass('shift-widget_active');
      }
    });
  })
}