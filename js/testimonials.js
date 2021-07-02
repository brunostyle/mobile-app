let swiper3 = new Swiper('.testimonials__container', {
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