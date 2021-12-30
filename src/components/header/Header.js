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
