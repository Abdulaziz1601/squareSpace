"use strict";
// $(document).ready(function(){
//     // $('.info__slick-slide').slick({
//     //     autoplay: true,
//     //     infinite: true,
//     //     speed: 500,
//     //     fade: true,
//     //     nextArrow: '<button class="slick-next slick-btn"><img src="icons/nextArrow.svg" alt=""> </button>',
//     //     prevArrow: '<button class="slick-prev slick-btn"><img src="icons/prevArrow.svg" alt=""> </button>',
//     // });

//     $('.templates__slick-slide').slick({
//       autoplay: true,
//       infinite: true,
//       slidesToShow: 2,
//       slidesToScroll: 1,
//       nextArrow: '<button class="slick-next slick-btn"><img src="icons/nextArrow.svg" alt=""> </button>',
//       prevArrow: '<button class="slick-prev slick-btn"><img src="icons/prevArrow.svg" alt=""> </button>',
//     });
   
//   });

  //SLIDER


const slides = document.querySelectorAll('.info__slider'),
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
slidesField.style.display = 'flex'; // display:flex helps us to make elements in a row
slidesField.style.transition = '.5s all'; //smooth transition

slidesWrapper.style.overflow = 'hidden'; // we hide another slides, and move slidesFiel
    