let slideIndex = 0;
let slides = document.getElementsByClassName("slide");
showSlides();

// Next/previous controls
function plusSlides(n) {
  slideIndex += n;
  if(slideIndex >= slides.length) slideIndex = 0;
  if(slideIndex < 0) slideIndex = slides.length - 1;
  updateSlides();
}

// Automatic slideshow
function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}

function updateSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}
