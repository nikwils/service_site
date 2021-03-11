const sendForm = (elID) => {
    const errorMessage = 'Что-то пошло не так...',
        loadMessage = 'Загрузка',
        successMessage = 'Спасибо! Мы скоро с вами свяжемся';

    const form = document.getElementById(elID);
    const statusMessage = document.createElement('div');

    form.addEventListener('submit', (event) => {
        
        statusMessage.style.cssText = 'font-size: 2rem;';
        
            const target = event.target;
            event.preventDefault();
            form.appendChild(statusMessage);

            if(target.matches('#form3')){
                statusMessage.textContent = loadMessage;
                statusMessage.style.cssText = 'color: white;';
            }
            statusMessage.textContent = loadMessage;
            const formData = new FormData(form);
            
            
            postData(formData)
                .then((response) => {
                    if(response.status !== 200) {
                        throw new Error('status network not 200');
                    }
                    statusMessage.textContent = successMessage;
                    if(target.matches('#form3')){
                        statusMessage.style.cssText = 'color: white;';
                    }
                })
                .catch(error => {
                    statusMessage.textContent = errorMessage;
                    console.error(error);
                });
            
        });        

    const postData = (formData) => {

        const inputs = document.querySelectorAll('input');
        inputs.forEach(input => input.value = '');

        return fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: formData
        });

    };
};

export default sendForm;