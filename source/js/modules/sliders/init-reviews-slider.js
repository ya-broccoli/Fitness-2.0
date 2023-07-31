const reviewsSlider = document.querySelector('.reviews__slider');
const buttonNext = document.querySelector('.reviews__button--next');
const buttonPrev = document.querySelector('.reviews__button--prev');

const initSliderReviews = () => {
  new Swiper(reviewsSlider, {

    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrev,
    },

    slidesPerView: 1,
    spaceBetween: 30,
  });
};

export {initSliderReviews};
