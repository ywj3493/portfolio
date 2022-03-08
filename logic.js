"use strict";

//scrollIntoView Smooth
function scrollIntoViewSmooth(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}

//Make navbar transparent when it is on the top
let navActive = false;
document.addEventListener("scroll", () => {
  if (window.scrollY == 0) {
    document.querySelector("#navbar").classList.remove("navbar--blue");
    navActive = false;
  } else if (!navActive) {
    document.querySelector("#navbar").classList.add("navbar--blue");
    navActive = true;
  }
});

//Handle scrolling when clicking on the navbar button
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) return;
  scrollIntoViewSmooth(link);
});

//Handle scrolling when clicking on the contact me button
const contactMeBtn = document.querySelector(".home__contact");
contactMeBtn.addEventListener("click", (event) => {
  console.dir("click");
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) return;
  scrollIntoViewSmooth(link);
});

//Make home contents transparent when scrolling
const homeElement = document.querySelector("#home");
const homeHeight = homeElement.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  if (window.scrollY < homeHeight) {
    home.style.opacity = 1 - window.scrollY / homeHeight;
  }
});

//Handle scroll to top when click arrow button
const arrowBtn = document.querySelector(".arrow-up");
let arrowBtnActive = false;
document.addEventListener("scroll", () => {
  if (window.scrollY < homeHeight) {
    console.dir("test");
    arrowBtn.style.bottom = "-100px";
    arrowBtnActive = false;
  } else if (!arrowBtnActive) {
    arrowBtn.style.bottom = 0;
    arrowBtnActive = true;
  }
});

arrowBtn.addEventListener("click", () => {
  scrollIntoViewSmooth("#home");
});
