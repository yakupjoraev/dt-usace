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
    loop: true,
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

function sliderStudents() {
  const container = document.querySelector('.students')

  if (!container) {
    return null
  }

  Swiper.use([EffectFade, Navigation, Pagination]);
  const swiperOne = new Swiper('.slider-students__container-1', {
    slidesPerView: 'auto',
    centeredSlides: true,
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: ".slider-students-next-1",
      prevEl: ".slider-students-prev-1",
    },
    pagination: {
      el: ".slider-graduates-pagination",
      clickable: true,
    },
    mousewheel: true,
    keyboard: true,
  });

  Swiper.use([EffectFade, Navigation, Pagination]);
  const swiperTwo = new Swiper('.slider-students__container-2', {
    slidesPerView: 'auto',
    centeredSlides: true,
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: ".slider-students-next-2",
      prevEl: ".slider-students-prev-2",
    },
    pagination: {
      el: ".slider-graduates-pagination",
      clickable: true,
    },
    mousewheel: true,
    keyboard: true,
  });

  Swiper.use([EffectFade, Navigation, Pagination]);
  const swiperThree = new Swiper('.slider-students__container-3', {
    slidesPerView: 'auto',
    centeredSlides: true,
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: ".slider-students-next-3",
      prevEl: ".slider-students-prev-3",
    },
    pagination: {
      el: ".slider-graduates-pagination",
      clickable: true,
    },
    mousewheel: true,
    keyboard: true,
  });

  Swiper.use([EffectFade, Navigation, Pagination]);
  const swiperFour = new Swiper('.slider-students__container-4', {
    slidesPerView: 'auto',
    centeredSlides: true,
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: ".slider-students-next-4",
      prevEl: ".slider-students-prev-4",
    },
    pagination: {
      el: ".slider-graduates-pagination",
      clickable: true,
    },
    mousewheel: true,
    keyboard: true,
  });

  Swiper.use([EffectFade, Navigation, Pagination]);
  const swiperFive = new Swiper('.slider-students__container-5', {
    slidesPerView: 'auto',
    centeredSlides: true,
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: ".slider-students-next-5",
      prevEl: ".slider-students-prev-5",
    },
    pagination: {
      el: ".slider-graduates-pagination",
      clickable: true,
    },
    mousewheel: true,
    keyboard: true,
  });
}

sliderStudents();


function sliderDisciplines() {
  const container = document.querySelector('.disciplines-slider__container')

  if (!container) {
    return null
  }

  Swiper.use([EffectFade, Navigation, Pagination]);
  const swiperDisciplines = new Swiper('.disciplines-slider__container', {
    slidesPerView: 'auto',
    centeredSlides: true,
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: ".disciplines-slider-next",
      prevEl: ".disciplines-slider-prev",
    },
    pagination: {
      el: ".slider-graduates-pagination",
      clickable: true,
    },
    mousewheel: true,
    keyboard: true,
  });
}

sliderDisciplines();
