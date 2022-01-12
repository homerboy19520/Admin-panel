var swiper = new Swiper(".mySwiper-europe", {
  slidesPerView: "1",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  freeMode: true,
  spaceBetween: 30,

  breakpoints: {
    "500": {
      slidesPerView: "auto",
    },
  },
});

var swiper = new Swiper(".mySwiper-sights", {
  slidesPerView: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  freeMode: true,
  spaceBetween: 30,

  breakpoints: {
    "500": {
      slidesPerView: "auto",
    },
  },
});

var swiper = new Swiper(".mySwiper-america", {
  slidesPerView: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  freeMode: true,
  spaceBetween: 30,

  breakpoints: {
    "500": {
      slidesPerView: "auto",
    },
  },
});

const swiperLincs = document.querySelectorAll(".swiper-comp__link");
const swiperWrappers = document.querySelectorAll(".swiper-comp__box");

const swipersContainer = document.querySelectorAll(".swiper-comp__container");
const swiperMainMass = Array.from(swipersContainer);

let swiperChildren;
let massSwipers = [];

swiperMainMass.forEach((item) => {
  swiperChildren = Array.from(item.children);
});

if (swiperLincs) {
  swiperLincs.forEach((item, index) => {
    item.addEventListener("click", () => {
      delActive();
      let wrapperLink = item.closest(".swiper-comp__box");
      wrapperLink.classList.toggle("swiper-comp__box_active");
      addSwiper(index);
      animateClose(index);
    });
  });
}

function delActive() {
  swiperWrappers.forEach((item) => {
    item.classList.remove("swiper-comp__box_active");
  });
}

function animateClose(index) {
  let sliders = swiperChildren[index].querySelectorAll(".swiper-slide");

  sliders.forEach((item) => {
    item.classList.toggle("swiper-slide_hidden");
    setTimeout(() => item.classList.toggle("swiper-slide_hidden"), 1000);
  });
}

function addSwiper(index) {
  swiperChildren[index].classList.add("swiper_active");

  swiperChildren.forEach((item) => {
    if (swiperChildren.indexOf(item) !== index) {
      item.classList.remove("swiper_active");
    }
  });
}
