// Images array (shared)
const bgAndSlides = [
  'images_homepage/1707629221052.jpg',
  'images_homepage/1707935627250.jpg',
  'images_homepage/IMG-20250614-WA0009.jpg',
  'images_homepage/IMG-20250621-WA0000.jpg',
  'images_homepage/IMG_20250723-WA0044.jpeg',
  'images_homepage/IMG_20250825-WA0014.jpg',
  'images_homepage/IMG_20241123_133147.jpg',
  'images_homepage/IMG_20250721_153556.jpg',
  'images_homepage/IMG_20250721_154213.jpg',
  'images_homepage/IMG_20250822_123740.jpg'
];

// --------- Hero background (blur + random movement) ---------
const hero = document.querySelector(".hero");
const bgContainer = document.createElement("div");
bgContainer.classList.add("slideshow-container");
hero.prepend(bgContainer);

bgAndSlides.forEach(src=>{
  const div = document.createElement("div");
  div.className = "slide";
  div.style.backgroundImage = `url(${src})`;
  bgContainer.appendChild(div);
});

let bgIndex = 0;
function animateBackground(){
  const slides = bgContainer.querySelectorAll(".slide");
  slides.forEach(s=>s.style.opacity=0);
  const active = slides[bgIndex];
  active.style.opacity = 1;

  // random translate + scale
  const top = (Math.random()*10 - 5) + "%";
  const left = (Math.random()*10 - 5) + "%";
  const scale = 1 + Math.random()*0.1;
  active.style.transform = `translate(${left},${top}) scale(${scale})`;

  bgIndex = (bgIndex + 1) % slides.length;
  setTimeout(animateBackground, 4000);
}
animateBackground();

// --------- Hero main slideshow ---------
let heroIndex = 0;
const heroSlidesContainer = document.getElementById("heroSlideshow");
heroSlidesContainer.innerHTML = ""; // clear existing slides

bgAndSlides.forEach(src=>{
  const div = document.createElement("div");
  div.className = "slide";
  div.innerHTML = `<img src="${src}" alt="Slide">`;
  heroSlidesContainer.appendChild(div);
});

const heroSlides = heroSlidesContainer.querySelectorAll(".slide");
heroSlides[heroIndex].classList.add("active");

function changeSlide(n){
  heroSlides[heroIndex].classList.remove("active");
  heroIndex = (heroIndex + n + heroSlides.length) % heroSlides.length;
  heroSlides[heroIndex].classList.add("active");
}

// Quick Links Drawer toggle
function toggleQuickLinks(){
  const drawer = document.getElementById("quickLinksDrawer");
  drawer.classList.toggle("open");
  const nav = document.querySelector("nav");
  nav.style.marginLeft = drawer.classList.contains("open") ? "260px" : "0";
}
