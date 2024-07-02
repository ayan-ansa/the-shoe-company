const navbar = document.querySelector(".navbar");
const hamburgerMenu = document.querySelector("#hamburger-menu");
const header = document.querySelector("header");
const homeText = document.querySelector(".home-text");

hamburgerMenu.addEventListener("click", function () {
  navbar.classList.toggle("active");
  homeText.classList.toggle("move-down");
  hamburgerMenu.classList.toggle("bx-x");
});
window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});
window.addEventListener("scroll", () => {
  navbar.classList.remove("active");
  hamburgerMenu.classList.remove("bx-x");
});
