/*===== EXPANDER MENU  =====*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
      toggle.classList.toggle("bx-x");
    });
  }
};
showMenu("header-toggle", "nav-menu");

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  /*Active link*/
  navLink.forEach((n) => n.classList.remove("active"));
  this.classList.add("active");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

// =================Btn Toggle====================//
const btnMenu = document.querySelector(".header__logo");
const menu = document.querySelector(".nav__name");

btnMenu.addEventListener("click", () => {
  menu.classList.toggle("active");
});

const allLinks = document.querySelectorAll(".item-nav");

allLinks.forEach((item) => {
  item.addEventListener("click", () => {
    menu.classList.remove("active");
  });
});

/*=============== SHOW SCROLL UP ===============*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  if (this.scrollY >= 300) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);
