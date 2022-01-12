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

const closeWrapper = document.querySelector(".container");

arrSpoilerSlides.forEach((item) => {
  item.addEventListener("click", () => {
    modalWindow.classList.toggle("modal-content_open");
  });
});

modalButton.addEventListener("click", () => {
  modalWindow.classList.toggle("modal-content_open");
  console.log("work");
});

closeWrapper.addEventListener("click", () => {
  acide.classList.remove("aside_open");
  closeWrapper.classList.remove("container_open");
});

swiperChildren.forEach((item) => {
  let cards = item.querySelectorAll(".swiper-slide");
  cards.forEach((item) => {
    item.addEventListener("click", () => {
      acide.classList.add("aside_open");
      closeButtonAside.classList.remove("aside__button-close_open");
      closeWrapper.classList.add("container_open");
    });
  });
});

closeButtonAside.addEventListener("click", () => {
  acide.classList.toggle("aside_open");
  closeButtonAside.classList.toggle("aside__button-close_open");
});
