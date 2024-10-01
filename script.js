// NAVBAR
// toogle class active hamburger menu
const hamburgerMenu = document.querySelector("#hamburger-menu");
hamburgerMenu.addEventListener("click", function (e) {
  const navbarNav = document.querySelector(".navbar-nav");
  navbarNav.classList.toggle("active");
  e.preventDefault();
});
// MEMBERIKAN KELAS ACTIVE PADA TOMBOL SEARCH
const buttonSearch = document.querySelector("#search");
buttonSearch.addEventListener("click", function (e) {
  const searchForm = document.querySelector(".search-form");
  const searchBox = document.querySelector("#search-box");
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
});
// MEMEBERIKAN KELAS ACTIVE PADA SHOPPING CART
const buttonShoppingCart = document.querySelector("#shopping-cart");
buttonShoppingCart.addEventListener("click", function (e) {
  const shoppingCart = document.querySelector(".shopping-cart");
  shoppingCart.classList.toggle("active");
  e.preventDefault();
});

// MENGHILANGKAN elemen KETIKA DI KLIK DI LUAR TOMBOL
const navbarNav = document.querySelector(".navbar-nav");
const searchForm = document.querySelector(".search-form");
const shoppingCart = document.querySelector(".shopping-cart");
document.addEventListener("click", function (e) {
  // hamburger menu
  if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  // search box
  if (!buttonSearch.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
  // shopping cart
  if (!buttonShoppingCart.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});
