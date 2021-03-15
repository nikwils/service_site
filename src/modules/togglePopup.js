'use strict';

const togglePopup = () => {
    const popup = document.querySelector('.popup'),
        popupBtn = document.querySelectorAll('.popup-btn'),
        popupContent = document.querySelector('.popup-content'),
        menu = document.querySelector('menu');

    let count = 0,
        appearanceInterval;

    function appearanceAnimate(){

        menu.classList.remove('active-menu');

        appearanceInterval = requestAnimationFrame(appearanceAnimate);
        count += 1;

        if(document.documentElement.clientWidth > 768){
            if(count < 40) {
            popup.style.display = 'block';
            popupContent.style.left = count + '%';
        }else{
            cancelAnimationFrame(appearanceInterval);
        }} else{
            popupContent.style.left = 30 + '%';
            popup.style.display = 'block';
            cancelAnimationFrame(appearanceInterval);
        }
        
        
    };
    
    popupBtn.forEach((el)=>{el.addEventListener('click', function(){
        count = 0;
        appearanceAnimate();
        });
    });

    popup.addEventListener('click', (event)=>{
        let target = event.target;
        
        if(target.classList.contains('popup-close')){
            count = 0;
            popup.style.display = 'none';
        } else {
            target = target.closest('.popup-content');

            if(!target) {
                count = 0;
                popup.style.display = 'none';
            }
        }
        
    });
};
export default togglePopup;