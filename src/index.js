import allModalCallBack from "./modules/allModalCallBack";
import sendDataForm from "./modules/sendDataForm";

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
     * Отправка данных из формы
     */
    sendDataForm();


    /**
     *
     *  Загрузка карточек по клику на кнопку .add-sentence-btn
     */
    const uploadCard = () => {

        const sentence = document.querySelector('.sentence'),
            addSentenceBtn = document.querySelector('.add-sentence-btn');
        let el = sentence.querySelectorAll('.hidden');

        console.log(el);

        addSentenceBtn.addEventListener('click', (event) => {

                event.preventDefault();

                el.forEach((elem) => {

                    elem.classList.remove('hidden');
                });

                addSentenceBtn.classList.add('hidden');
        });

    };

    uploadCard();
});
