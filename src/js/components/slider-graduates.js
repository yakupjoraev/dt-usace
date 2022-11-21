// Подключение свайпера
import Swiper, { EffectFade, Navigation, Pagination } from 'swiper';

function sliderGraduatesSlider() {
  const container = document.querySelector('.slider-graduates')

  if (!container) {
    return null
  }

Swiper.use([EffectFade, Navigation, Pagination]);
const swiper = new Swiper('.slider-graduates__container', {
  slidesPerView: 'auto',
  centeredSlides: true,
  cssMode: true,
  navigation: {
    nextEl: ".slider-graduates-next",
    prevEl: ".slider-graduates-prev",
  },
  pagination: {
    el: ".slider-graduates-pagination",
    clickable: true,
  },
  mousewheel: true,
  keyboard: true,
});
}

sliderGraduatesSlider();
