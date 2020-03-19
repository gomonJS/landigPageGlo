'use strict';

const changeCameras = () => {

    const accordion = document.getElementById('accordion');
    const button = accordion.querySelector('button.button');
    const popupDiscount = document.querySelector('.popup-discount');

    const myOnOffSwitch = document.getElementById('myonoffswitch');
    const collapseTwo = document.getElementById('collapseTwo');

    const blockDisplayNone = () => {

        collapseTwo.querySelectorAll('.title-text')[1].style.display = 'none';
        collapseTwo.querySelectorAll('.select-box')[2].style.display = 'none';
        collapseTwo.querySelectorAll('.select-box')[3].style.display = 'none';
    };

    // открытие следующего блока по кнопке
    button.addEventListener('click', (event) => {

        let target = event.target;
        target = target.closest('button.button');

        if (target) {
            popupDiscount.style.display = 'flex';
        }
    });

    if (myOnOffSwitch.checked) {
        blockDisplayNone();
    }

    myOnOffSwitch.addEventListener('change', (event) => {

        let target = event.target;

        if (!target.checked) {

            collapseTwo.querySelectorAll('.title-text')[1].style.display = 'inline-block';
            collapseTwo.querySelectorAll('.select-box')[2].style.display = 'inline-block';
            collapseTwo.querySelectorAll('.select-box')[3].style.display = 'inline-block';
        } else {
            blockDisplayNone();
        }
    });

};

export default changeCameras;