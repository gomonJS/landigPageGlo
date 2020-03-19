import allModalCallBack from "./modules/allModalCallBack";
import sendDataForm from "./modules/sendDataForm";
import uploadCard from "./modules/uploadCardButton";
import accordionQuestions from "./modules/accordionQuestions";
import sendDataCaptureForm from "./modules/sendDataCaptureForm";
import switchingCalculatorButton from "./modules/switchingCalculatorButton";
import changeCameras from "./modules/changeCameras";
import calculator from "./modules/calculator";

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
     *  Подсчет данных конструктора
     */
    calculator();


    /**
     *  Отправка данных с формы .capture-form
     */
    sendDataCaptureForm();
});