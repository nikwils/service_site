'use strict';

const sendForm = (elID) => {
    const errorMessage = 'Что-то пошло не так...',
        loadMessage = 'Загрузка',
        successMessage = 'Спасибо! Мы скоро с вами свяжемся';

    const form = document.getElementById(elID);
    const statusMessage = document.createElement('div');
    const popup = document.querySelector('.popup');

    form.addEventListener('submit', (event) => {
        
        statusMessage.style.cssText = 'font-size: 2rem;';

        const target = event.target;

        event.preventDefault();
        statusMessage.hidden = false;
        statusMessage.textContent = loadMessage;
        form.appendChild(statusMessage);

        if(target.matches('#form3')){
            statusMessage.style.cssText = 'color: white;';
        }
        
        const formData = new FormData(form);

        let body = {};
        formData.forEach((val, key) => {
            body[key] = val;
        });
        
        postData(body)
            .then((response) => {
                if(response.status !== 200) {
                    throw new Error('status network not 200');
                }

                statusMessage.textContent = successMessage;

                if(target.matches('#form3')){
                    statusMessage.style.cssText = 'color: white;';
                    setTimeout(() => {
                        popup.style.display = 'none';
                    },8000)
                } 
                
                setTimeout(()=> {
                    statusMessage.hidden = true;
                }, 5000);
                
            })
            .catch(error => {
                statusMessage.textContent = errorMessage;
                console.error(error);
            });
            
        });        

    const postData = (body) => {

        const inputs = document.querySelectorAll('input');
        inputs.forEach(input => input.value = '');

        return fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body),
        });

    };
}

    export default sendForm;