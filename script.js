// Hero manual slideshow
let heroIndex=0;
const heroSlides=document.querySelectorAll(".hero-slideshow .slide");
function changeSlide(n){
  heroSlides[heroIndex].classList.remove("active");
  heroIndex=(heroIndex+n+heroSlides.length)%heroSlides.length;
  heroSlides[heroIndex].classList.add("active");
}

// Quick Links Drawer toggle
function toggleQuickLinks(){
  const drawer=document.getElementById("quickLinksDrawer");
  drawer.classList.toggle("open");
  const nav=document.querySelector("nav");
  nav.style.marginLeft = drawer.classList.contains("open") ? "260px":"0";
}

// Background slideshow (blur + random motion)
const bgContainer=document.createElement("div");
bgContainer.classList.add("slideshow-container");
document.querySelector(".hero").prepend(bgContainer);

const bgImages=[
  "images_homepage/IMG_20250721_153556.jpg",
  "images_homepage/IMG_20250721_154213.jpg",
  "images_homepage/IMG_20250822_123740.jpg",
  "images_homepage/1707935627250.jpg"
];

bgImages.forEach(src=>{
  const div=document.createElement("div");
  div.className="slide";
  div.style.backgroundImage=`url(${src})`;
  bgContainer.appendChild(div);
});

let bgIndex=0;
function animateBackground(){
  const slides=document.querySelectorAll(".slideshow-container .slide");
  slides.forEach(s=>s.style.opacity=0);
  const active=slides[bgIndex];
  active.style.opacity=1;
  // random movement
  const top=Math.random()*10-5+"%";
  const left=Math.random()*10-5+"%";
  const scale=1+Math.random()*0.1;
  active.style.transform=`translate(${left},${top}) scale(${scale})`;
  bgIndex=(bgIndex+1)%slides.length;
  setTimeout(animateBackground,4000);
}
animateBackground();
