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
        } else {handlerMenu(target)}
    });

    btnMenu.addEventListener('click',  handlerMenu);
};

export default toggleMenu;