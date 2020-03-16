'use strict';

const questionValueCopy = (value) => {

    const directorForm = document.querySelector('.director-form'),
        captureForm = document.querySelector('.capture-form'),
        input = document.createElement('input');

    if (value !== '') {
        input.type = 'hidden';
        input.value = value;
        input.classList.add('hidden-value');
        input.name = 'name_question_hidden';

        [...captureForm].forEach((element) => {

            if (!element.classList.contains('hidden-value')) {
                captureForm.appendChild(input);
            }
            console.log(element);
            let rem = captureForm.querySelector('.hidden-value');
            console.log(rem, '----------------');
        });
    } else {
        let rem = captureForm.querySelector('.hidden-value');
        captureForm.removeChild(rem);
        // [...captureForm].forEach((element) => {
        //
        //     let rem = captureForm.querySelector('.hidden-value');
        //     captureForm.removeChild(rem);
        //     // if (!element.classList.contains('hidden-value')) {
        //     //     captureForm.removeChild(input);
        //     // }
        //     console.log(element);
        // });
    }

    console.log([...directorForm][0].value);
    console.log(captureForm);

};

const allModalCallBack = (modalClass, callBtn) => {

    const modal = document.querySelector(modalClass);
    let btn = document.querySelectorAll(callBtn);

    [...btn].forEach((element) => {

        element.addEventListener('click', (event) => {

            event.preventDefault();

            if (event.target.classList.contains('consultation-btn')) {

                if (event.target.parentNode.children[0].value !== '') {
                    questionValueCopy(event.target.parentNode.children[0].value);
                } else {
                    return;
                }
                event.target.parentNode.children[0].value = '';
            }

            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });
    });

    modal.addEventListener('click', (event) => {

        // event.preventDefault();
        let target = event.target;

        if (target.classList.contains('popup-close')) {

            modal.style.display = 'none';
            document.body.style.overflow = '';
        }

        if (target.classList.contains(modalClass.substring(1,))) {

            modal.style.display = 'none';
            document.body.style.overflow = '';
        }
        questionValueCopy('');
    });
};

export default allModalCallBack;