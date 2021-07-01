let swiper4 = new Swiper('.member__container', {
    slidesPerView: 1,
    grabCursor: true,
    /* autoplay: true, */
    spaceBetween: 20,
    loop: true,
    breakpoints: {
      510: {
        slidesPerView: 2,
      },
      800: {
        slidesPerView: 3
      }
      
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    }
  });