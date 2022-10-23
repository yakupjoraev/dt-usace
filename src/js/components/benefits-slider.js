import { auto } from '@popperjs/core';
import Swiper, {Autoplay, Navigation, Pagination } from 'swiper';
Swiper.use([Autoplay, Navigation, Pagination]);


if (window.matchMedia("(max-width: 576px)").matches) {
  const benefitsSwiper = new Swiper('.benefits__slider', {
    slidesPerView: auto,
    effect: 'fade',
    autoplay: {
      delay: 3000,
      },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
    },
  });
}
