const slider = () => {
    const slides = document.querySelectorAll('.portfolio-item'),
        slider = document.querySelector('.portfolio-content');

    let currentSlide = 0,
        interval,
        dots = document.querySelector('.portfolio-dots'),
        dot = [];
    
    const createDot = () => {
        for(let i = 0; i < slides.length; i++) {
            const li = document.createElement('li');

            dots.append(li);
            dot.push(li);

            li.classList.add('dot');

            if(i === 0) {
                li.classList.add('dot-active'); 
            } 
        };
    };
    createDot();
    dots = document.querySelector('.portfolio-dots');


    const prevSlide = (el, i, strClass) => {
        el[i].classList.remove(strClass);
    }
    const nextSlide = (el, i, strClass) => {
        el[i].classList.add(strClass);
    }

    const autoPlaySlide  = () => {

        prevSlide(slides, currentSlide, 'portfolio-item-active');
        prevSlide(dot, currentSlide, 'dot-active');
        currentSlide++;
        if(currentSlide >= slides.length) {
            currentSlide = 0;
        }
        nextSlide(slides, currentSlide, 'portfolio-item-active');
        nextSlide(dot, currentSlide, 'dot-active');
    };
    const startSlide  = (time = 3000) => {
        interval = setInterval(autoPlaySlide, time);
    };
    const stopSlide  = () => {
        clearInterval(interval);
    };
    startSlide(1500);

    slider.addEventListener('click', (event) => {
        event.preventDefault();

        let target = event.target;

        if(!target.matches('.portfolio-btn, .dot')){
            return;
        }

        prevSlide(slides, currentSlide, 'portfolio-item-active');
        prevSlide(dot, currentSlide, 'dot-active');

        if(target.matches('#arrow-right')) {
            currentSlide++;
        } else if(target.matches('#arrow-left')){
            currentSlide--;
        } else if(target.matches('.dot')) {
            dot.forEach((el, i)=> {
                if(el === target) {
                    currentSlide = i;
                }
            });
        }

        if(currentSlide >=slides.length) {
            currentSlide = 0;
        } else if(currentSlide < 0) {
            currentSlide = slides.length - 1;
        }
        nextSlide(slides, currentSlide, 'portfolio-item-active');
        nextSlide(dot, currentSlide, 'dot-active');

    });

    slider.addEventListener('mouseover', event => {
        if(event.target.matches('.portfolio-btn') || 
        event.target.matches('.dot')){
            stopSlide();
        }
    })
    slider.addEventListener('mouseout', event => {
        if(event.target.matches('.portfolio-btn') || 
        event.target.matches('.dot')){
            startSlide();
        }
    });
};

export default slider;