'use strict';

const addInputSum = (selectorDiscount, constructorValue = '') => {

    const form = selectorDiscount.querySelector('form');

    const inputHidden = document.createElement('input');

    inputHidden.type = 'hidden';
    inputHidden.value = constructorValue;
    inputHidden.name = 'constructor_sum';
    inputHidden.style.display = 'none';

    form.append(inputHidden);
};

const changeCameras = () => {

    const calcResult = document.getElementById('calc-result');
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

    const blockDisplayInlineBlock = () => {

        collapseTwo.querySelectorAll('.title-text')[1].style.display = 'inline-block';
        collapseTwo.querySelectorAll('.select-box')[2].style.display = 'inline-block';
        collapseTwo.querySelectorAll('.select-box')[3].style.display = 'inline-block';
    };

    // открытие следующего блока по кнопке
    button.addEventListener('click', (event) => {

        let target = event.target;
        target = target.closest('button.button');

        if (target) {

            popupDiscount.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            addInputSum(popupDiscount, calcResult.value);
        }
    });

    if (myOnOffSwitch.checked) {
        blockDisplayNone();
    }

    myOnOffSwitch.addEventListener('change', (event) => {

        let target = event.target;

        if (!target.checked) {
            blockDisplayInlineBlock();
        } else {
            blockDisplayNone();
        }
    });

};

export default changeCameras;