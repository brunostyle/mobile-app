let swiper2 = new Swiper('.screenshots__container', {
  slidesPerView: 2,
  grabCursor: true,
  /* autoplay: true, */
  spaceBetween: 20,
  loop: true,
  breakpoints: {
    510: {
      slidesPerView: 3,
    },
    800: {
      slidesPerView: 4
    }
    
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  }
});