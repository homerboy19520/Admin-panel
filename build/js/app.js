var thumbs = new Swiper(".thumbs", {
  slidesPerView: 3,
  allowTouchMove: false,
});

var mySwiper3 = new Swiper(".mySwiper3 ", {
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
    "screen and (min-width: 700px) and (max-width: 1000px)",
    {
      width: 650,
      height: 250,
    },
  ],
];

new Chartist.Bar(".ct-chart", data, options, responsiveOptions);



const headerButton = document.querySelector(".header__button-nav");
const nav = document.querySelector(".nav");

if (headerButton) {
  headerButton.addEventListener("click", () => {
    nav.classList.toggle("nav_open");
    headerButton.classList.toggle("header__button-nav_open");
  });
}


var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  freeMode: true,
  spaceBetween: 30,
});

const acide = document.querySelector(".aside");

const modalWindow = document.querySelector(".modal-content");
const modalButton = document.querySelector(".modal-content__button");

const sliderlCommon = document.querySelector(".mySwiper");
const commonSlides = sliderlCommon.querySelectorAll(".swiper-slide");
const arrCommonSlides = Array.from(commonSlides);

const sliderSpoiler = document.querySelector(".thumbs");
const spoilerSlides = sliderSpoiler.querySelectorAll(".swiper-slide");
const arrSpoilerSlides = Array.from(spoilerSlides);

arrCommonSlides.forEach((item) => {
  item.addEventListener("click", () => {
    acide.classList.toggle("aside_open");
  });
});

arrSpoilerSlides.forEach((item) => {
  item.addEventListener("click", () => {
    modalWindow.classList.toggle("modal-content_open");
  });
});

modalButton.addEventListener("click", () => {
  modalWindow.classList.toggle("modal-content_open");
  console.log("work");
});

