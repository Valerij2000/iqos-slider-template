const swiperbenefit = new Swiper('.swiper-benefit', {
  direction: 'horizontal',
  observer: true,
  observeParents: true,
  loop: false,
  slidesPerView: 1,
  spaceBetween: 100,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

let swipercost;

let enableSwiperCost = function () {
  swipercost = new Swiper('.swiper-cost', {
    direction: 'horizontal',
    observer: true,
    observeParents: true,
    loop: false,
    slidesPerView: 1.5,
    spaceBetween: 5,
    breakpoints: {
      // when window width is >= 320px
      576: {
        slidesPerView: 2.5,
        spaceBetween: 5
      },
    },
    navigation: {
      nextEl: '.swiper-button-cost-next',
      prevEl: '.swiper-button-cost-prev',
    },
  });
};


const breakpoint = window.matchMedia("(min-width:992px)");
const breakpointChecker = function (swiper) {
  // if larger viewport and multi-row layout needed
  if (breakpoint.matches === true) {
    if (swiper !== undefined) swiper.destroy(true, true);
    return;
  } else if (breakpoint.matches === false) {
    return enableSwiperCost();
  }
};
breakpointChecker(swipercost);