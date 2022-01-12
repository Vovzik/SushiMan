function slider() {
    const company__swiper = new Swiper('.company__swiper-container', {
      // Optional parameters
      slidesPerView: 1,
      loop: false,
      pagination: {
        el: '.company__swiper-pagination',
        clickable: true
      },
     
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
    });
}

slider()
 