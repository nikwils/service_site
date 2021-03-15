'use strict';

const toggleMenu = () => {
    const btnMenu = document.querySelector('.menu'),
        menu = document.querySelector('menu');

    const handlerMenu = () => {
        menu.classList.toggle('active-menu');
    };

    menu.addEventListener('click', (event) => {
        let target = event.target;

        if (target.tagName !== 'A'){
            return;
        } else {handlerMenu()}
        
    });

    btnMenu.addEventListener('click', handlerMenu);

    document.addEventListener('click', (event) => {
        let target = event.target;
        if(!target.closest('menu') && !target.closest('.menu')) {
            menu.classList.remove('active-menu');
        }
    });

};
export default toggleMenu;