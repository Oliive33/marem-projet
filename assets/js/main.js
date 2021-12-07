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
/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "bx-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "bx-moon" : "bx-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "bx-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});
/*=============== SHOW SCROLL UP ===============*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  if (this.scrollY >= 300) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/*=============== onglets ===============*/
const onglets = Array.from(document.querySelectorAll(".onglets"));
const contenus = Array.from(document.querySelectorAll(".contenus"));

onglets.forEach((onglet) => {
  onglet.addEventListener("click", (e) => {
    for (let i = 0; i < onglets.length; i++) {
      if (onglets[i] === e.target) {
        onglets[i].classList.add("active-onglets");
      } else {
        onglets[i].classList.remove("active-onglets");
      }
    }

    console.log(onglets.indexOf(e.target));

    for (let i = 0; i < contenus.length; i++) {
      if (i === onglets.indexOf(e.target)) {
        contenus[i].classList.add("active-contenu");
      } else {
        contenus[i].classList.remove("active-contenu");
      }
    }
  });
});
// ==================Input Event===================//
const inputName = document.querySelector('input[type="number"]');
const select = document.querySelector(".dons-mount");

document.getElementById("dons").addEventListener("input", (event) => {
  select.innerHTML = event.target.value;
});
