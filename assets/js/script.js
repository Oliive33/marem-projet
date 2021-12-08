/*=============== QUESTIONS ACCORDION ===============*/
const accordionItems = document.querySelectorAll(".questions__item");

accordionItems.forEach((item) => {
  const accordionHeader = item.querySelector(".questions__header");

  accordionHeader.addEventListener("click", () => {
    const openItem = document.querySelector(".accordion-open");

    toggleItem(item);

    if (openItem && openItem !== item) {
      toggleItem(openItem);
    }
  });
});

const toggleItem = (item) => {
  const accordionContent = item.querySelector(".questions__content");

  if (item.classList.contains("accordion-open")) {
    accordionContent.removeAttribute("style");
    item.classList.remove("accordion-open");
  } else {
    accordionContent.style.height = accordionContent.scrollHeight + "px";
    item.classList.add("accordion-open");
  }
};
// Slider portfolio
const sliderPortfolio = document.querySelector(".slider-portfolio");
const srcEnCoursSlider = document.querySelector(".img-visible-slider");
const allPicsPortfolio = Array.from(
  document.querySelectorAll(".grid-item img")
);
const rightPorfolio = document.querySelector(".btn-right");
const leftPorfolio = document.querySelector(".btn-left");
const fermerSlide = document.querySelector(".btn-fermer-slider");

let photoEnCours;
let indexEnCours;

allPicsPortfolio.forEach((item) => {
  item.addEventListener("click", (e) => {
    sliderPortfolio.style.display = "block";
    srcEnCoursSlider.src = e.target.src;
    photoEnCours = e.target;
    indexEnCours = allPicsPortfolio.indexOf(photoEnCours);
    console.log(indexEnCours);
  });
});
rightPorfolio.addEventListener("click", () => {
  if (indexEnCours === 11) {
    indexEnCours = 0;
    srcEnCoursSlider.src = allPicsPortfolio[indexEnCours].src;
    photoEnCours = allPicsPortfolio[indexEnCours];
    console.log(indexEnCours);
    return;
  }

  srcEnCoursSlider.src = allPicsPortfolio[indexEnCours + 1].src;
  photoEnCours = allPicsPortfolio[indexEnCours + 1];
  indexEnCours = allPicsPortfolio.indexOf(photoEnCours);
  console.log(indexEnCours);
});
leftPorfolio.addEventListener("click", () => {
  if (indexEnCours === 0) {
    indexEnCours = 11;
    srcEnCoursSlider.src = allPicsPortfolio[indexEnCours].src;
    photoEnCours = allPicsPortfolio[indexEnCours];
    console.log(indexEnCours);
    return;
  }

  srcEnCoursSlider.src = allPicsPortfolio[indexEnCours - 1].src;
  photoEnCours = allPicsPortfolio[indexEnCours - 1];
  indexEnCours = allPicsPortfolio.indexOf(photoEnCours);
  console.log(indexEnCours);
});

fermerSlide.addEventListener("click", () => {
  sliderPortfolio.style.display = "none";
});
// ==================Input Event===================//
const inputName = document.querySelector('input[type="number"]');
const select = document.querySelector(".dons-mount");

document.getElementById("dons").addEventListener("input", (event) => {
  select.innerHTML = event.target.value;
});
