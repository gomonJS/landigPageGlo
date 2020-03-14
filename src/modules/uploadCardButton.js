'use strict';

const uploadCard = () => {

    const sentence = document.querySelector('.sentence'),
        addSentenceBtn = document.querySelector('.add-sentence-btn');
    let el = sentence.querySelectorAll('.hidden');

    addSentenceBtn.addEventListener('click', (event) => {

        event.preventDefault();

        el.forEach((elem) => {

            elem.classList.remove('hidden');
        });

        addSentenceBtn.classList.add('hidden');
    });

};

export default uploadCard;