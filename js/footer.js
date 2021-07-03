let swiper5 = new Swiper('.footer__container', {
    slidesPerView: 1,
    grabCursor: true,
    autoplay: true,
    spaceBetween: 20,
    loop: true,
    breakpoints: {
      510: {
        slidesPerView: 2,
      },
      800: {
        slidesPerView: 3
      }
      
    }
});