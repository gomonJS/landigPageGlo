'use strict';

const uploadCard = () => {

    const sentence = document.querySelector('.sentence'),
        addSentenceBtn = document.querySelector('.add-sentence-btn');
    let el = sentence.querySelectorAll('.hidden');

    el.forEach((element) => {

        let ch = element.children;

        [...ch].forEach((el) => {

            el.classList.remove('wow');
        });
    });

    addSentenceBtn.addEventListener('click', (event) => {

        event.preventDefault();

        el.forEach((elem) => {

            elem.classList.remove('hidden');

            let ch = elem.children;

            [...ch].forEach((el) => {

                el.classList.add('wow');
            });
        });

        addSentenceBtn.classList.add('hidden');
    });

};

export default uploadCard;