export function sendToTXT() {
  $('.js_saver').on('submit', function (e) {
    e.preventDefault();
    let child = $(e.target).find('.js_email')[0];

    $(e.target).find('.js_email').removeClass('js_error');
    if (child) {
      if (!emailTest(child) && child.value != '') {
        $.post({
          type: "POST",
          url: 'saver.php',
          data: $(child).serialize(),
          success: function (data) {
            e.target.querySelector('.js_popup-thx').click();
          } //Здесь пишем функцию, которая произойдет при успешной отправке
        })
      } else {
        $(e.target).find('.js_email').addClass('js_error')
        alert('Некорректный адрес электронной почты. Пожалуйста, повторите ввод')
      }
    }

    function emailTest(input) {
      return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }
  });
}