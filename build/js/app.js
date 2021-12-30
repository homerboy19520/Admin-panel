var thumbs = new Swiper(".thumbs", {
  slidesPerView: 3,
  allowTouchMove: false,
});

var mySwiper3 = new Swiper(".mySwiper4 ", {
  spaceBetween: 18,
  navigation: {
    nextEl: ".aside__swiper-next",
    prevEl: ".aside__swiper-prev",
  },
});

var modal = new Swiper(".modal", {
  spaceBetween: 18,
  navigation: {
    nextEl: ".big-button-next",
    prevEl: ".big-button-prev",
  },
  thumbs: {
    swiper: thumbs,
  },
});

var data = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  series: [
    [40, 29, 31, 22, 39, 38, 29],
    [20, 16, 19, 12, 20, 29, 21],
  ],
};

var options = {
  seriesBarDistance: 0,
  width: 450,
  height: 250,
  responsive: true,
  high: 40,
  low: 10,

  axisX: {
    showLabel: true,
    showGrid: false,
    offset: 50,
  },
};

var responsiveOptions = [
  [
    "screen and (max-width: 701px) and screen",
    {
      width: 450,
      height: 250,
    },
  ],

  [
    "screen and (min-width: 501px) and (max-width: 1000px)",
    {
      width: 580,
      height: 300,
    },
  ],

  [
    "screen and (min-width: 570px) and (max-width: 701px)",
    {
      width: 500,
      height: 200,
    },
  ],
  [
    "screen and (max-width: 571px)",
    {
      width: 330,
      height: 200,
    },
  ],
];

new Chartist.Bar(".ct-chart", data, options, responsiveOptions);



const headerButton = document.querySelector(".header__button-nav");
const nav = document.querySelector(".nav");

const navLinks = document.querySelector(".swiper-comp__nav");

if (headerButton) {
  headerButton.addEventListener("click", () => {
    nav.classList.toggle("nav_open");
    headerButton.classList.toggle("header__button-nav_open");
    body.classList.toggle("body_hidden");
  });
}


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

const body = document.querySelector(".body");

const acide = document.querySelector(".aside");

const modalWindow = document.querySelector(".modal-content");
const modalButton = document.querySelector(".modal-content__button");

const sliderlCommon = document.querySelector(".mySwiper4");
const commonSlides = sliderlCommon.querySelectorAll(".swiper-slide");

const sliderSpoiler = document.querySelector(".thumbs");
const spoilerSlides = sliderSpoiler.querySelectorAll(".swiper-slide");
const arrSpoilerSlides = Array.from(spoilerSlides);

const closeButtonAside = document.querySelector(".aside__button-close");

const bigWrapper = document.querySelector(".wrapper_column");

arrSpoilerSlides.forEach((item) => {
  item.addEventListener("click", () => {
    modalWindow.classList.toggle("modal-content_open");
  });
});

modalButton.addEventListener("click", () => {
  modalWindow.classList.toggle("modal-content_open");
  console.log("work");
});

swiperChildren.forEach((item) => {
  let cards = item.querySelectorAll(".swiper-slide");
  cards.forEach((item) => {
    item.addEventListener("click", () => {
      acide.classList.toggle("aside_open");
      closeButtonAside.classList.toggle("aside__button-close_open");
    });
  });
});

closeButtonAside.addEventListener("click", () => {
  acide.classList.toggle("aside_open");
  closeButtonAside.classList.toggle("aside__button-close_open");
});

