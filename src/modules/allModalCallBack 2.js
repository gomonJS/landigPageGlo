'use strict';

const allModalCallBack = (modalClass, callBtn) => {

    const modal = document.querySelector(modalClass);
    let btn = document.querySelectorAll(callBtn);

    [...btn].forEach((element) => {

        element.addEventListener('click', (event) => {

            event.preventDefault();

            if (event.target.classList.contains('consultation-btn')) {
                return;
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

        // questionValueCopy('');
    });
};

export default allModalCallBack;