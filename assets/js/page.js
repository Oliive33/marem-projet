// =================Btn Toggle====================//
const btnMenus = document.querySelector(".header__logo");
const menus = document.querySelector(".nav-logo");

btnMenus.addEventListener("click", () => {
  menus.classList.toggle("active");
});

const allLink = document.querySelector(".contact-slogan");

allLink.addEventListener("click", () => {
  menus.classList.remove("active");
});
