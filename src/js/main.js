
$(document).ready(function(){
    $('.info__slick-slide').slick({
        autoplay: true,
        infinite: true,
        speed: 500,
        fade: true,
        nextArrow: '<button class="slick-next slick-btn"><img src="icons/nextArrow.svg" alt=""> </button>',
        prevArrow: '<button class="slick-prev slick-btn"><img src="icons/prevArrow.svg" alt=""> </button>',
    });

    $('.templates__slick-slide').slick({
      autoplay: true,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      nextArrow: '<button class="slick-next slick-btn"><img src="icons/nextArrow.svg" alt=""> </button>',
      prevArrow: '<button class="slick-prev slick-btn"><img src="icons/prevArrow.svg" alt=""> </button>',
    });
   
  });