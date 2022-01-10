//cards slider
const cards__swiper = new Swiper('.cards__swiper-container', {
  // Optional parameters
  slidesPerView: 4,
  spaceBetween: 20,
  loop: false,
  // Navigation arrows
  navigation: {
    nextEl: '.cards__swiper-button-next',
    prevEl: '.cards__swiper-button-prev',
  },



  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 10,
    },

    500: {
        spaceBetween: 10,
    },

    // when window width is >= 320px
     900: {
        slidesPerView: 3,
    },

     // when window width is >= 320px
     1250: {
        slidesPerView: 4,
      },
  } 

});