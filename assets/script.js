const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

// Variables fixes
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const bannerImg = document.querySelector(".banner-img");
const bannerText = document.querySelector("#banner p");
const dots = document.getElementsByClassName("dot");

// variable point de départ de l'index des diapos
let currentSlide = 0;

// Fonction pour mettre à jour l'affichage de l'image et le texte
function updateSlide(i) {
  const slide = slides[i];
  bannerImg.src = `./assets/images/slideshow/${slide.image} `;
  bannerText.innerHTML = slide.tagLine;

  // Boucle pour mettre à jour les points en fonction de l'image
  for (let j = 0; j < dots.length; j++) {
    if (j === i) {
      dots[j].classList.add("dot_selected");
    } else {
      dots[j].classList.remove("dot_selected");
    }
  }
}

// Au clic droit, modification du slide, défilement infini
arrowRight.addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlide(currentSlide);
});

// Au clic gauche, modification du slide, défilement infini
arrowLeft.addEventListener("click", () => {
  if (currentSlide === 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = (currentSlide - 1) % slides.length;
  }
  updateSlide(currentSlide);
});
