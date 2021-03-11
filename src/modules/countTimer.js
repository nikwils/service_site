function countTimer(deadline){
    let timerHours = document.querySelector('#timer-hours'),
        timerMinutes = document.querySelector('#timer-minutes'),
        timerSeconds = document.querySelector('#timer-seconds'),
        spans = document.querySelectorAll('.timer-numbers span');

    let idInterval;

    function getTimeRemaining(){
        let dateStop = new Date(deadline).getTime(),
            dateNow = new Date().getTime(),
            timeRemaining = (dateStop - dateNow) / 1000,
            seconds = Math.floor(timeRemaining % 60),
            minutes = Math.floor((timeRemaining / 60) % 60),
            hours = Math.floor((timeRemaining / 60 / 60) % 24);
            return {timeRemaining, hours, minutes, seconds};
            
    }

    function checkedForValue(number) {
        if(number < 10) {
            return '0' + number;
        } else return number;
    }

    function updateClock(){
        
        let timer = getTimeRemaining();

        let newTimeHours = checkedForValue(timer.hours),
            newTimeMinutes = checkedForValue(timer.minutes),
            newTimeSeconds = checkedForValue(timer.seconds);

        timerHours.textContent = newTimeHours;
        timerMinutes.textContent = newTimeMinutes;
        timerSeconds.textContent = newTimeSeconds;
        
        if(timer.timeRemaining < 0){
            clearInterval(idInterval);
            timerHours.textContent = '00';
            timerMinutes.textContent = '00';
            timerSeconds.textContent = '00';
            spans.forEach((item)=>{
                item.style.color = 'red';
            });
            
        }

        
    }
    idInterval = setInterval(updateClock, 1000);


        
    
};

export default countTimer;