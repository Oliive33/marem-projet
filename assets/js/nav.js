navbar = document.getElementById("navbar");
navElements = document.getElementById("nav-elements");

window.addEventListener("scroll", function () {
  const scroll = this.document.documentElement.scrollTop;

  console.log(scroll);

  if (scroll > 200) {
    navbar.style.height = "28vh";
    navElements.style.height = "28vh";
  } else {
    navbar.style.height = "36vh";
    navElements.style.height = "36vh";
  }
});
