'use strict';

const dataValidation = () => {

    const calcBlock = document.querySelector('.calc-block'),
        mainFormInput = document.querySelector('.main-form-input'),
        footerFormInput = document.querySelector('.footer-form-input'),
        form3 = document.getElementById('form3'),
        form1 = document.getElementById('form1'),
        form2 = document.getElementById('form2');

    calcBlock.addEventListener('input', (event) => {
        let target = event.target;
        if(target.matches('.calc-square, .calc-count, .calc-day')){
        target.value = target.value.replace(/\D/g, '');
        }
    });
    form3.addEventListener('input', (event) => {
        let target = event.target;

        if(target.matches('#form3-name')){
            target.value = target.value.replace(/\w/g, '');
           
            form3.addEventListener('change', () => {
                target.value = target.value.replace(/(^|\s)\S/g, function(a) {return a.toUpperCase()});
            });
        }
        if(target.matches('#form3-phone')){
            target.value = target.value.replace(/[\D() -]/g, '');
            if(target.matches(/\d{7,13}/)) {
                form3.button.disabled = false;
            }
        }
        if(target.matches('#form3-email')){
            target.value = target.value.replace(/\W@./g, '');
        };
    });

    mainFormInput.addEventListener('input', (event) => {
        let target = event.target;

        if(target.matches('#form1-name')){
            target.value = target.value.replace(/\w/g, '');
           
            mainFormInput.addEventListener('change', () => {
                target.value = target.value.replace(/(^|\s)\S/g, function(a) {return a.toUpperCase()});
            });
        }
        if(target.matches('#form1-phone')){
            target.value = target.value.replace(/[\D+() -]/g, '');
            
        }
        if(target.matches('#form1-email')){
            target.value = target.value.replace(/\W@./g, '');
            
        };
    });
    footerFormInput.addEventListener('input', (event) => {
        let target = event.target;

        if(target.matches('#form2-name', '#form2-message')){
            target.value = target.value.replace(/\w/g, '');
            footerFormInput.addEventListener('change', () => {
                target.value = target.value.replace(/(^|\s)\S/g, function(a) {return a.toUpperCase()});
            });
        }
        if(target.matches('#form2-phone')){
            target.value = target.value.replace(/[\D() -]/g, '');
        }
        if(target.matches('#form2-email')){
            target.value = target.value.replace(/\W@./g, '');
        };
    });
        
};

export default dataValidation;