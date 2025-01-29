# Frontend Mentor - Creative agency single page site solution

This is a solution to the [Creative agency single page site challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/creative-agency-singlepage-site-Pq6V3I2RM). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Navigate the slider using either their mouse/trackpad or keyboard

### Screenshot

![screenshot mobile](https://github.com/Lo-Deck/Creative-agency-single-page-site/blob/main/screenshot/Creative%20single%20page%20site-mobile.png).
![screenshot mobile-menu](https://github.com/Lo-Deck/Creative-agency-single-page-site/blob/main/screenshot/Creative%20single%20page%20site-mobile-menu.png).
![screenshot tablet](https://github.com/Lo-Deck/Creative-agency-single-page-site/blob/main/screenshot/Creative%20single%20page%20site-tablet.png).
![screenshot desktop](https://github.com/Lo-Deck/Creative-agency-single-page-site/blob/main/screenshot/Creative%20single%20page%20site-desktop.png).


### Links

- Solution URL: [Repositories](https://github.com/Lo-Deck/Creative-agency-single-page-site).
- Live Site URL: [Website](https://lo-deck.github.io/Creative-agency-single-page-site/).

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow


### What I learned

I learned how to display different images using a carousel.

```js
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

```

### Continued development

Learning from each challenge, I will continue to make website with JS and learning from different challenge from Front-end Mentor.


### Useful resources

- [Mozilla mdn](https://developer.mozilla.org/) - Very useful.
- [FreeCodeCamp](https://www.freecodecamp.org/) - I've been learning a lot.
- [Utopia](https://utopia.fyi/) - To have a better responsive design.


## Author

- Frontend Mentor - [@Lo-deck](https://www.frontendmentor.io/profile/Lo-Deck)


## Acknowledgments

Thanks to Front-end Mentor and its community.

