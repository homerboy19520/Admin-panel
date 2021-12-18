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
