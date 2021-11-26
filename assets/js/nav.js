navbar = document.getElementById("navbar");
navElements = document.getElementById("nav-elements");

window.addEventListener("scroll", function () {
  const scroll = this.document.documentElement.scrollTop;

  console.log(scroll);

  if (scroll > 200) {
    navbar.style.height = "30vh";
    navElements.style.height = "30vh";
  } else {
    navbar.style.height = "40vh";
    navElements.style.height = "40vh";
  }
});
