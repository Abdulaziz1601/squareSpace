"use strict";


(function () {
    //SLIDER INFO
    const slides = document.querySelectorAll('.info__slide'),
        slider = document.querySelector('.info__slider'),
        prev = document.querySelector('.info__slider-prev'),
        next = document.querySelector('.info__slider-next'),
        total = document.querySelector('#total'),
        current = document.querySelector('#current'),
        slidesWrapper = document.querySelector('.info__slider-wrapper'), // parent of a window 
        slidesField = document.querySelector('.info__slider-inner'), // window to show slides
        width = window.getComputedStyle(slidesWrapper).width; // width of the parentWindow
    let slideIndex = 1;

    if (slides.length < 10) { // If length of slide is less than 10, then we add 0
        total.textContent = `0${slides.length}`;
        current.textContent = `0${slideIndex}`;
    } else {
        total.textContent = slides.length; // If length of slide is more than 10, then we donot add 0
        current.textContent = slideIndex;
    }

    let offset = 0; // offset to move slides
    slidesField.style.width = 100 * slides.length + '%'; //In our case it is 400%
    slidesField.style.transition = '.5s all'; //smooth transition
    slidesWrapper.style.overflow = 'hidden'; // we hide another slides, and move slidesFiel

    slides.forEach(slide => {
        slide.style.width = width;
    });

    const onlyNum = str => +str.replace(/\D/g, "");

    next.addEventListener('click', () => {
        if (offset == onlyNum(width) * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += onlyNum(width); // when next is clicked offset grows
        } // so it will move to left to -X, by making slides to pass next after another
        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == slides.length) { // whenever index is at the end, it returns to first slide 
            slideIndex = 1;
        } else {
            slideIndex++;
        }

        if (slides.length < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }

    });

    prev.addEventListener('click', () => {

        if (offset == 0) { // when offset is at 0 - before 1St slide ->
            offset = onlyNum(width) * (slides.length - 1); // it will move to the last slide
        } else {
            offset -= onlyNum(width); // offset decreases so 
        }
        slidesField.style.transform = `translateX(-${offset}px)`; // field is moved to right, 
        // which imitates elements moving left

        if (slideIndex == 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }

        if (slides.length < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }

    });
}());

(function() {
    //SLIDER INFO
    let slideIndex = 1;
    let offset = 0; // offset to move slides

    const slides = document.querySelectorAll('.templates__slide'),
          slider = document.querySelector('.templates__slider'),
          prev = document.querySelector('.templates__slider-prev'),
          next = document.querySelector('.templates__slider-next'),
          total = document.querySelector('#total'),
          current = document.querySelector('#current'),
          slidesWrapper = document.querySelector('.templates__slider-wrapper'), // parent of a window 
          slidesField = document.querySelector('.templates__slider-inner'), // window to show slides
          width = window.getComputedStyle(slidesWrapper).width; // width of the parentWindow

    if (slides.length < 10) { // If length of slide is less than 10, then we add 0
        total.textContent = `0${slides.length}`;
        current.textContent = `0${slideIndex}`;
    } else {
        total.textContent = slides.length; // If length of slide is more than 10, then we donot add 0
        current.textContent = slideIndex;
    }

    slidesField.style.width = 100 * slides.length + '%'; //In our case it is 400%
    slidesField.style.transition = '.5s all'; //smooth transition
    slidesWrapper.style.overflow = 'hidden'; // we hide another slides, and move slidesFiel

    slides.forEach(slide => {
        slide.style.width = width;
    });

    const onlyNum = str => +str.replace(/\D/g, "");

    next.addEventListener('click', () => {
        if (offset == onlyNum(width) * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += onlyNum(width); // when next is clicked offset grows
        } // so it will move to left to -X, by making slides to pass next after another
        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == slides.length) { // whenever index is at the end, it returns to first slide 
            slideIndex = 1;
        } else {
            slideIndex++;
        }

        if (slides.length < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }

    });

    prev.addEventListener('click', () => {

        if (offset == 0) { // when offset is at 0 - before 1St slide ->
            offset = onlyNum(width) * (slides.length - 1); // it will move to the last slide
        } else {
            offset -= onlyNum(width); // offset decreases so 
        }
        slidesField.style.transform = `translateX(-${offset}px)`; // field is moved to right, 
        // which imitates elements moving left

        if (slideIndex == 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }

        if (slides.length < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }

    });
}());