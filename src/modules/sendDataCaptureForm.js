'use strict';

const sendDataCaptureForm = () => {

    const directorForm = document.querySelector('.director-form');
    const captureForm = document.querySelector('.capture-form');
    const popupConsultation = document.querySelector('.popup-consultation');
    const inputHidden = document.createElement('input');

    inputHidden.type = 'hidden';
    inputHidden.name = 'user_question';
    inputHidden.value = '';
    inputHidden.style.display = 'none';



    const questionForm = popupConsultation.querySelector('.popup-dialog')
        .querySelector('.popup-content').querySelector('.capture-form');

    questionForm.append(inputHidden);

    const [input, button] = [...directorForm];

    button.setAttribute('disabled', 'disabled');

    input.addEventListener('input', () => {

        if (input.value.trim() !== '') {
            button.removeAttribute('disabled');
        }

        button.addEventListener('click', (event) => {

            event.preventDefault();

            document.cookie = 'userQuestion=' + input.value;

            popupConsultation.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });

        if (document.cookie.split('=')[0] === 'userQuestion') {
            inputHidden.value = document.cookie.split('=')[1];
        }
    });

    popupConsultation.addEventListener('click', (event) => {

        let target = event.target;

        if (!target.classList.contains('capture-form')) {
            input.value = '';
            // document.cookie = 'userQuestion' + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        }

        button.setAttribute('disabled', 'disabled');
    });
};

export default sendDataCaptureForm;