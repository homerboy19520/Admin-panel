const headerButton = document.querySelector(".header__button-nav");
const nav = document.querySelector(".nav");

if (headerButton) {
  headerButton.addEventListener("click", () => {
    nav.classList.toggle("nav_open");
    headerButton.classList.toggle("header__button-nav_open");
  });
}
