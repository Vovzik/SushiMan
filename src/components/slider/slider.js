//slider slider
const slider__swiper = new Swiper('.slider__swiper-container', {
  // Optional parameters
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 20,
  loop: false,
  autoplay: true,
  pagination: {
    el: '.slider__swiper-pagination',
    clickable: true
  },

 
 /*  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
  } */

});


if(document.querySelector('body').clientWidth <= 768) {
  const slidermenu = new Swiper('.slidermenu__swiper-container', {
    // Optional parameters
    slidesPerView: 3.3,
    spaceBetween: 10,
    autoplay: true,
  });

  console.log('true');
  
} else {
  console.log('false');
}
