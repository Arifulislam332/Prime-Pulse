const slides = document.querySelector(".slides");
const btnPreview = document.querySelector(".preview");
const btnNext = document.querySelector(".next");

export default function slideBtn() {
  btnPreview.addEventListener("click", preSlide);
  btnNext.addEventListener("click", nextSlide);
}

let currIndx = 0;

function nextSlide() {
  if (currIndx < slides.children.length - 1) {
    currIndx++;
    showSlide(currIndx);
  } else {
    currIndx = 0;
    showSlide(currIndx);
  }
}

function preSlide() {
  if (currIndx > 0) {
    currIndx--;
    showSlide(currIndx);
  } else {
    currIndx = slides.children.length - 1;
    showSlide(currIndx);
  }
}

function showSlide(index) {
  slides.style.transform = `translateX(-${index * 100}vw)`;
}
