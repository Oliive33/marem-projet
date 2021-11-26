navbar = document.getElementById("navbar");
navElements = document.getElementById("nav-elements");

window.addEventListener("scroll", function () {
  const scroll = this.document.documentElement.scrollTop;

  console.log(scroll);

  if (scroll > 200) {
    navbar.style.height = "20vh";
    navElements.style.height = "20vh";
  } else {
    navbar.style.height = "25vh";
    navElements.style.height = "25vh";
  }
});
