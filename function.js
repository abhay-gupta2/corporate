const swiper = new Swiper('.swiper', {
    loop: true, // Enables infinite looping
    grabCursor: true, // Enables a hand cursor for user interaction
    spaceBetween: 30, // Space between slides
  
    slidesPerView: 3, // Show 3 slides at a time
    slidesPerGroup: 1, // Move 1 slide forward on navigation
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    autoplay: {
      delay: 5000, // Auto slide every 5 seconds (5000ms)
      disableOnInteraction: false, // Keeps autoplay running after manual interaction
    },
  });
  