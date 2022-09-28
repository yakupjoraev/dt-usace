import Swiper, {EffectFade, Autoplay, Navigation, Pagination } from 'swiper';
Swiper.use([EffectFade, Autoplay, Navigation, Pagination]);
const swiper = new Swiper('.hero-slider__container', {
  slidesPerView: 1,
  effect: 'fade',
  autoplay: {
    delay: 3000,
    },
  loop: true
});
