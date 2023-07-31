const coachesSlider = document.querySelector('.swiper');
const buttonPrev = document.querySelector('.swiper-button-prev');
const buttonNext = document.querySelector('.swiper-button-next');

const initCoachesSlider = () => {
  new Swiper(coachesSlider, {

    navigation: {
      prevEl: buttonPrev,
      nextEl: buttonNext,
    },

    loop: true,
    direction: 'horizontal',

    breakpoints: {
      1200: {
        slidesPerView: 4,
        spaceBetween: 40,
      },

      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },

      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
    },
  });
};

export {initCoachesSlider};
