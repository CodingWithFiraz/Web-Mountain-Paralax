let moon = document.getElementById("moon");
let hill = document.getElementById("hill");
let hill2 = document.getElementById("hill2");
let hill3 = document.getElementById("hill3");
let hill4 = document.getElementById("hill4");
let land5 = document.getElementById("land5");
let hill6 = document.getElementById("hill6");
let snow7 = document.getElementById("snow7");
let para_teks = document.getElementById("para_teks");
let text = document.getElementById("text");
let seeBox = document.getElementById("see-box");

window.addEventListener("scroll", () => {
  let value = window.scrollY;
  text.style.marginTop = value * 2 + "px";
  para_teks.style.marginLeft = value * 1 + "px";
  seeBox.style.marginTop = value * 1 + "px";
  hill.style.top = value * 0.5 + "px";
  hill.style.left = value * -0.2 + "px";
  hill2.style.left = value * 0.5 + "px";
  hill2.style.top = value * 0.2 + "px";
  hill3.style.left = value * -0.5 + "px";
  hill4.style.left = value * 0.5 + "px";
  hill6.style.top = value * -0.1 + "px";
  moon.style.top = value * -0.5 + "px";
  moon.style.left = value * -0.2 + "px";
  snow7.style.left = value * 1 + "px";
});

see.addEventListener("click", function () {});

// Carousel
const productContainers = [...document.querySelectorAll(".product-container")];
const nxtBtn = [...document.querySelectorAll(".nxt-btn")];
const preBtn = [...document.querySelectorAll(".pre-btn")];

productContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtn[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth;
  });

  preBtn[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
  });
});

// Dark Mode
const light = document.querySelector(".bi-lightbulb");
const link = document.getElementsByClassName("nav-link");
const logo = document.querySelector(".navbar-brand");
light.addEventListener("click", function () {
  link[0].classList.toggle("dark-text");
  link[1].classList.toggle("dark-text");
  link[2].classList.toggle("dark-text");
  logo.classList.toggle("dark-text");
});
