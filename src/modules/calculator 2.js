'use strict';

const calculator = () => {

    const accordion = document.getElementById('accordion');
    const myOnOffSwitch = document.getElementById('myonoffswitch');
    const myOnOffSwitchTwo = document.getElementById('myonoffswitch-two');
    const select = accordion.querySelectorAll('select');
    const calcResult = document.getElementById('calc-result');

    let selectCountOne = 0,
        selectCountTwo = 0,
        selectCountThree = 0,
        selectCountFour = 0,
        wellAvailability = 0,
        startValue = 10000;


    let countSum = 0;

    myOnOffSwitch.value = startValue;
    countSum = +myOnOffSwitch.value;

    myOnOffSwitch.addEventListener('change', (event) => {

        let target = event.target;

        if (target.value === '10000') {
            myOnOffSwitch.value = startValue + 5000;
        } else if (target.value === '15000') {
            myOnOffSwitch.value = startValue;
        }

        // если 1 блок изменился сбрасываем все пункты во втором блоке
        select.forEach((element) => {

            element.value = element.options[0].value;
        });

        countSum = +myOnOffSwitch.value;

        calcResult.value = countSum;
    });

    calcResult.value = countSum;

    let selectOne = select[0].value;

    select[0].addEventListener('change', (event) => {

        let target = event.target;

        if (parseFloat(target.value) === 2) {
            selectCountOne = (countSum / 100) * 20;
        } else {
            selectCountOne = 0;
        }

        calcResult.value = countSum + selectCountOne;
    });

    calcResult.value = countSum + selectCountOne;

    select[1].addEventListener('change', (event) => {

        let target = event.target;

        if (parseFloat(target.value) === 2) {
            selectCountTwo = (countSum / 100) * 30;
        } else if (parseFloat(target.value) === 3) {
            selectCountTwo = (countSum / 100) * 50;
        } else {
            selectCountTwo = 0;
        }

        calcResult.value = countSum + selectCountOne + selectCountTwo;
    });

    calcResult.value = countSum + selectCountOne + selectCountTwo;

    select[2].addEventListener('change', (event) => {

        let target = event.target;

        if (parseFloat(target.value) === 2) {
            selectCountThree = (countSum / 100) * 20;
        } else {
            selectCountThree = 0;
        }

        calcResult.value = countSum + selectCountOne +
            selectCountTwo + selectCountThree;
    });

    calcResult.value = countSum + selectCountOne +
        selectCountTwo + selectCountThree;

    select[3].addEventListener('change', (event) => {

        let target = event.target;

        if (parseFloat(target.value) === 2) {
            selectCountFour = (countSum / 100) * 30;
        } else if (parseFloat(target.value) === 3) {
            selectCountFour = (countSum / 100) * 50;
        } else {
            selectCountFour = 0;
        }

        calcResult.value =
            countSum + selectCountOne + selectCountTwo +
            selectCountThree + selectCountFour;
    });

    if (myOnOffSwitchTwo.checked) {
        if (myOnOffSwitch.value === '10000') {
            wellAvailability = 1000;
        } else if (myOnOffSwitch.value === '15000') {
            wellAvailability = 2000;
        }
    }

    myOnOffSwitchTwo.addEventListener('change', (event) => {

        let target = event.target;

        wellAvailability = 0;


        calcResult.value =
            countSum + selectCountOne + selectCountTwo +
            selectCountThree + selectCountFour + wellAvailability;
    });

    calcResult.value =
        countSum + selectCountOne + selectCountTwo +
        selectCountThree + selectCountFour + wellAvailability;
};

export default calculator;