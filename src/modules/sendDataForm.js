'use strict';

const sendDataForm = () => {

    const errorMessage = 'Что-то пошло не так',
        loadMessage = 'Загрузка...',
        successMessage = 'Сообщение отправлено, в ближайшее время мы с Вами свяжемся';

    const forms = document.querySelectorAll('form');

    // вывод сообщения на страницу
    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'font-size: 16px';

    /**
     * Запрос на сервер
     * @param body
     * @returns {Promise<Response>}
     */
    const postData = (body) => {

        return fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
    };

    /**
     *
     * @param form
     */
    const eventFormData = (form) => {

        /**
         * FormData позволяют конструировать наборы пар ключ-значение
         * @type {FormData}
         */
        const formData = new FormData(form);

        let body = {}, flag = false;

        formData.forEach((value, key) => {
            body[key] = value;
        });

        for (let value in body) { if (body[value] !== '') { flag = true; } }

        if (flag) {

            form.appendChild(statusMessage);
            statusMessage.style.cssText = 'color: #222';
            statusMessage.textContent = loadMessage;

            postData(body).then((response) => {

                if (response.status !== 200) {
                    throw new Error('Status server not 200');
                }
                statusMessage.textContent = successMessage;
            }).catch((error) => {
                statusMessage.textContent = errorMessage;
                console.error(error);
            });
            console.log(body);
            const timeClearData = setTimeout(() => {
                statusMessage.remove();
                form.reset();
                clearTimeout(timeClearData);
            }, 3000);
        }
    };

    /**
     * Валидация форм
     * @param form
     */
    const validationForm = (form) => {

        const error = new Set();

        const init = () => {

            [...form].forEach((elem) => {

                if (elem.type === 'text') {
                    !(/^[а-яёА-ЯЁ\s\-]+$/).test(elem.value) ?
                        error.add(elem) : error.delete(elem);
                }

                if (elem.type === 'tel') {
                    !(/^\+?[78]([-()]*\d){10}$/).test(elem.value) ?
                        error.add(elem) : error.delete(elem);
                    elem.placeholder = '+7(999)-999-99-99';
                }
            });
        };

        init();

        form.addEventListener('change', init);

        form.addEventListener('submit', (event) => {

            event.preventDefault();

            let errorType = [];

            if (error.size === 0) {

                statusMessage.remove();
                errorType = [];
                eventFormData(form);
            } else {
                error.forEach((element) => {
                    errorType.push(element.placeholder);
                });
                statusMessage.textContent = 'Неверные данные: ' + [...errorType];
                form.appendChild(statusMessage);
            }
        });
    };

    forms.forEach(validationForm);
};

export default sendDataForm;