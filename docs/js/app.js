var thumbs = new Swiper(".thumbs", { slidesPerView: 3, allowTouchMove: !1 }),
  mySwiper3 = new Swiper(".mySwiper3 ", {
    spaceBetween: 18,
    navigation: {
      nextEl: ".aside__swiper-next",
      prevEl: ".aside__swiper-prev",
    },
  }),
  modal = new Swiper(".modal", {
    spaceBetween: 18,
    navigation: { nextEl: ".big-button-next", prevEl: ".big-button-prev" },
    thumbs: { swiper: thumbs },
  }),
  data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    series: [
      [40, 29, 31, 22, 39, 38, 29],
      [20, 16, 19, 12, 20, 29, 21],
    ],
  },
  options = {
    seriesBarDistance: 0,
    width: 450,
    height: 250,
    responsive: !0,
    high: 40,
    low: 10,
    axisX: { showLabel: !0, showGrid: !1, offset: 50 },
  },
  responsiveOptions = [
    [
      "screen and (min-width: 700px) and (max-width: 1000px)",
      { width: 650, height: 250 },
    ],
  ];
new Chartist.Bar(".ct-chart", data, options, responsiveOptions);
const headerButton = document.querySelector(".header__button-nav"),
  nav = document.querySelector(".nav");
headerButton &&
  headerButton.addEventListener("click", () => {
    nav.classList.toggle("nav_open"),
      headerButton.classList.toggle("header__button-nav_open");
  });
var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
  freeMode: !0,
  spaceBetween: 30,
});
const acide = document.querySelector(".aside"),
  modalWindow = document.querySelector(".modal-content"),
  modalButton = document.querySelector(".modal-content__button"),
  sliderlCommon = document.querySelector(".mySwiper"),
  commonSlides = sliderlCommon.querySelectorAll(".swiper-slide"),
  arrCommonSlides = Array.from(commonSlides),
  sliderSpoiler = document.querySelector(".thumbs"),
  spoilerSlides = sliderSpoiler.querySelectorAll(".swiper-slide"),
  arrSpoilerSlides = Array.from(spoilerSlides);
arrCommonSlides.forEach((e) => {
  e.addEventListener("click", () => {
    acide.classList.toggle("aside_open");
  });
}),
  arrSpoilerSlides.forEach((e) => {
    e.addEventListener("click", () => {
      modalWindow.classList.toggle("modal-content_open");
    });
  }),
  modalButton.addEventListener("click", () => {
    modalWindow.classList.toggle("modal-content_open"), console.log("work");
  });
