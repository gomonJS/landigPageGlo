'use strict';

const switchingCalculatorButton = () => {

    const accordion = document.getElementById('accordion');

    const panelCollapse = accordion.querySelectorAll('.panel-collapse');


    for (let i = 0; i < panelCollapse.length; i++) {

        panelCollapse[i].addEventListener('click', (event) => {

            let target = event.target;
            target = target.closest('a.button');

            if (target) {

                event.preventDefault();

                for (let i = 0; i < panelCollapse.length; i++) {
                    panelCollapse[i].classList.remove('in');
                }
                panelCollapse[i+1].classList.add('in');
            }
        });
    }
};

export default switchingCalculatorButton;