const changePhotoTeam = () => {

    const command = document.querySelector('#command');

    command.addEventListener('mouseover', event => {
        let target = event.target;
        let imgMain = target.src;
        if (target.matches('.command__photo')){
            target.src = target.dataset.img;
        } 
        command.addEventListener('mouseout', () => {
            if (target.matches('.command__photo')){
               target.src = imgMain;
            } 
        });

    });

};

export default changePhotoTeam;