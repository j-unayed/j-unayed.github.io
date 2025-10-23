// Hero manual slideshow
let heroIndex = 0;
const heroSlides = document.querySelectorAll(".hero-slideshow .slide");

function changeSlide(n) {
  heroSlides[heroIndex].classList.remove("active");
  heroIndex = (heroIndex + n + heroSlides.length) % heroSlides.length;
  heroSlides[heroIndex].classList.add("active");
}

// Quick GD Links toggle
function toggleQuickLinks() {
  document.getElementById("quickLinksDrawer").classList.toggle("open");
}
