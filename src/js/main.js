
$(document).ready(function(){
    $('.info__slick-slide').slick({
        autoplay: true,
        infinite: true,
        speed: 500,
        fade: true,
        nextArrow: '<button class="slick-next slick-btn"><img src="icons/nextArrow.svg" alt=""> </button>',
        prevArrow: '<button class="slick-prev slick-btn"><img src="icons/prevArrow.svg" alt=""> </button>',
        // onInit: function(){
        // $('.current').text('1');
        // },
        // onAfterChange: function(){
        // $('.current').text($('.info__slick-slide').slickCurrentSlide()+1);
        // }
  
    });


    let currentSlide = jQuery(slick.$slides.get(currentSlide)).find('.info__slick-slide').data('caption');
    const currentIndex = document.querySelector('.info__current');
    currentIndex.innerHTML = `${currentSlide}`;

    


    $('.templates__slick-slide').slick({
      // autoplay: true,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      nextArrow: '<button class="slick-next slick-btn"><img src="icons/nextArrow.svg" alt=""> </button>',
      prevArrow: '<button class="slick-prev slick-btn"><img src="icons/prevArrow.svg" alt=""> </button>',
  });
   

  });

// let currentSlide = $('.info__slick-slide').slick('slick-current');
// const currentIndex = document.querySelector('.info__current');
// currentIndex.innerHTML = `${currentSlide}`;
