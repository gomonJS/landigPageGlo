'use strict';

const accordionQuestions = (idAccordion) => {

    const accordionTwo = document.getElementById(idAccordion);

    // элемент на котором событие клика
    const panelHeading = accordionTwo.querySelectorAll('.panel-heading');
    // контент
    const panelCollapse = accordionTwo.querySelectorAll('.panel-collapse');


    for (let i = 0; i < panelHeading.length; i++) {

        panelHeading[i].style.cssText = 'cursor: pointer';

        panelHeading[i].addEventListener('click', (event) => {

            event.preventDefault();

            let target = event.target;
            target = target.closest('.panel-heading');

            for (let i = 0; i < panelCollapse.length; i++) {

                panelCollapse[i].classList.remove('in');
            }
            target.nextElementSibling.classList.toggle('in');
        });
    }
};

export default accordionQuestions;