//данный код работает при поддержке следующего ролика https://www.youtube.com/watch?v=PqTrhfjLQBI
export function feedbackPopup() {
  if (document.querySelectorAll('.popup__feedback-form')) {
    const forms = document.querySelectorAll('.popup__feedback-form');
    for (let i = 0; i < forms.length; i++) {
      let form = forms[i];
      form.addEventListener('submit', formSend); //при отправке формы запускается ф-я formSend
      //функция отправки
      async function formSend(e) {
        e.preventDefault(); //запрет стандартной отправки форм

        let error = formValidate(form); //присваивается результат работы функции
        let formData = new FormData(form); //новый массив с данными всех полей

        if (error === 0) {
          //дальнейший блок кода отправляет сообщение в содружестве с файлом php
          let response = await fetch('sendmail-popup.php', {
            method: 'POST',
            body: formData
          });
          if (response.ok) {
            let result = await response.json();
            console.log(result.message);
            form.reset();
            e.target.querySelector('.popup__feedback-nextlink').click();
          } else {
            alert('Ошибка');
          }
        } else {
          alert('Заполните обязательные поля!')
        }
      }

      function formValidate(form) {
        let error = 0;
        let formReq = form.querySelectorAll('.js_req') //require - обязательное поле //создаёт объект со всеми элементами с классом обязательности
        //присвоение каждому обязательному объекту определённого результата
        for (let index = 0; index < formReq.length; index++) {
          const input = formReq[index];
          formRemoveError(input); //в начале проверки объектов убрать у всех объектов класс '__error'
          //проверка заполненности оставшихся полей
          if (input.value === '') {
            formAddError(input);
            error++;
          }
        }
        return error;
      }

      //функции добавляют/убирают класс '__error' себе и родительскому объету
      function formAddError(input) {
        input.parentElement.classList.add('js_error');
        input.classList.add('js_error');
      }
      function formRemoveError(input) {
        input.parentElement.classList.remove('js_error');
        input.classList.remove('js_error');
      }
    }
  }
}
