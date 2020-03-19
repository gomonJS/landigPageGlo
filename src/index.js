import allModalCallBack from "./modules/allModalCallBack";
import sendDataForm from "./modules/sendDataForm";
import uploadCard from "./modules/uploadCardButton";
import accordionQuestions from "./modules/accordionQuestions";
import sendDataCaptureForm from "./modules/sendDataCaptureForm";
import switchingCalculatorButton from "./modules/switchingCalculatorButton";
import changeCameras from "./modules/changeCameras";

document.addEventListener('DOMContentLoaded', () => {
    'use strict';


    /**
     *  @param {'класс модального окна', 'кнопка вызова модального окна'}
     *
     *  Все модальные окна
     *
     */
    allModalCallBack('.popup-call', 'a.call-btn');
    allModalCallBack('.popup-discount', 'button.discount-btn');
    allModalCallBack('.popup-check', 'button.check-btn');
    allModalCallBack('.popup-consultation', 'button.consultation-btn');


    /**
     *  Отправка данных из формы
     */
    sendDataForm();


    /**
     *
     *  Загрузка карточек по клику на кнопку .add-sentence-btn
     */
    uploadCard();


    /**
     *  Аккордион
     */
    accordionQuestions('accordion');
    accordionQuestions('accordion-two');


    /**
     *  калькулятор переключение по кнопкам
     */
    switchingCalculatorButton();

    /**
     *  если выбран онино или двухкамерный
     */
    changeCameras();


    /**
     *
     */
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
            wellAvailability = 0;


        let countSum = 0;

        if (myOnOffSwitch.checked) {
            countSum = 10000;
        }

        myOnOffSwitch.addEventListener('change', (event) => {

            let target = event.target;

            if (target) {
                countSum = 15000;
            }

            select.forEach((element) => {

                element.value = element.options[0].value;
            });
        });

        let selectOne = select[0].value;

        select[0].addEventListener('change', (event) => {

            let target = event.target;

            if (parseFloat(target.value) === 2) {
                selectCountOne = (countSum / 100) * 20;
            } else {
                selectCountOne = 0;
            }
        });

        select[1].addEventListener('change', (event) => {

            let target = event.target;

            if (parseFloat(target.value) === 2) {
                selectCountTwo = (countSum / 100) * 30;
            } else {
                selectCountTwo = 0;
            }

            if (parseFloat(target.value) === 3) {
                selectCountTwo = (countSum / 100) * 50;
            } else {
                selectCountTwo = 0;
            }
        });

        select[2].addEventListener('change', (event) => {

            let target = event.target;

            if (parseFloat(target.value) === 2) {
                selectCountThree = (countSum / 100) * 20;
            } else {
                selectCountThree = 0;
            }
        });

        select[3].addEventListener('change', (event) => {

            let target = event.target;

            if (parseFloat(target.value) === 2) {
                selectCountFour = (countSum / 100) * 30;
            } else {
                selectCountFour = 0;
            }

            if (parseFloat(target.value) === 3) {
                selectCountFour = (countSum / 100) * 50;
            } else {
                selectCountFour = 0;
            }
        });

        if (myOnOffSwitchTwo.checked) {
            wellAvailability = 1000;
        }

        myOnOffSwitchTwo.addEventListener('change', (event) => {

            let target = event.target;

            if (!target.checked) {
                if (countSum < 15000) {
                    wellAvailability = 1000;
                    console.log(wellAvailability);
                } else {
                    wellAvailability = 2000;
                    console.log(wellAvailability);
                }
            }
        });

        calcResult.value =
            countSum + selectCountOne + selectCountTwo + selectCountThree + selectCountFour + wellAvailability;
    };

    calculator();


    /**
     *  Отправка данных с формы .capture-form
     */
    sendDataCaptureForm();
});