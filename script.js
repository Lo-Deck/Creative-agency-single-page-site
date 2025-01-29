
/* MENU */

const btnMenu = document.querySelector('.button-nav');

let isBtnMenuClicked = false;

btnMenu.addEventListener('click', () => {

    isBtnMenuClicked = !isBtnMenuClicked;

    if(isBtnMenuClicked){

        document.querySelector('.hamburger').classList.add('anim-rotate');

        setTimeout( () => {
            document.querySelector('.hamburger').src = './images/mobile/icon-cross.svg';
        }, 250);

        setTimeout( () => {
            document.querySelector('.hamburger').classList.remove('anim-rotate');
        }, 500);

        document.querySelector('.nav-menu').style.display = 'block';
        document.querySelector('.nav-menu').classList.add('anim-scale');

    }

    else{

        document.querySelector('.hamburger').classList.add('anim-rotate-invert');

        setTimeout( () => {
            document.querySelector('.hamburger').src = './images/mobile/icon-hamburger.svg';
        }, 250);

        setTimeout( () => {
            document.querySelector('.hamburger').classList.remove('anim-rotate-invert');
        }, 500);

        document.querySelector('.nav-menu').style.display = 'none';
        document.querySelector('.nav-menu').classList.remove('anim-scale');

    }

});


/* CAROUSEL */

const btnSliderLeft = document.querySelector('.left');
const btnSliderRight = document.querySelector('.right');
const sliderTitle = document.querySelector('.container-text-slider .section-title');
const imageText = document.querySelector('.project');


const displayText = (position) => {

    switch(position){

        case 0:
            sliderTitle.textContent = `Brand naming & guidelines`;
            imageText.innerHTML = `<span class="text-extra-bold">Lean Product Roadmap</span>2019 project`;
            break;

        case -100:
            sliderTitle.textContent = `Brand identity & merchandise`;
            imageText.innerHTML = `<span class="text-extra-bold">New Majestic Hotel</span>2018 Project`;
            break;

        case -200:
            sliderTitle.textContent = `Brand identity & web design`;
            imageText.innerHTML = `<span class="text-extra-bold">Crypto Dashboard</span>2016 Project`;
            break;

    }

}


let position = 0;

btnSliderLeft.addEventListener('click', () => {

    if(position >= 0 ){
        position = -200;
    }
    else{
        position += 100;
    }

    document.querySelector('.list-image').style.transform = `translateX(${position}%)`;

    displayText(position);

});


btnSliderRight.addEventListener('click', () => {

    if(position <= -200 ){
        position = 0;
    }
    else{
        position -= 100;
    }

    document.querySelector('.list-image').style.transform = `translateX(${position}%)`;

    displayText(position);

});


