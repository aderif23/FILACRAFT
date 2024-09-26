// NAVBAR
// toogle class active hamburger menu
const hamburgerMenu = document.querySelector("#hamburger-menu");
hamburgerMenu.addEventListener("click", function () {
  const navbarNav = document.querySelector(".navbar-nav");
  navbarNav.classList.toggle("active");
});
// MENGHILANGKAN HAMBURGER MENU KETIKA DI KLIK DI LUAR TOMBOL
const navbarNav = document.querySelector(".navbar-nav");
document.addEventListener("click", function (e) {
  if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
