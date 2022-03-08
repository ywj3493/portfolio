"use strict";

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}

//Make navbar transparent when it is on the top;
// getElementId 보다 querySelector 가 표준화 되어있음 id 뿐만 아니라 클래스 등으로 element를 가져 올 수 있기 때문
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  console.dir(navbar);
  if (window.scrollY == 0) {
    navbar.classList.remove("navbar--blue");
  } else {
    navbar.classList.add("navbar--blue");
  }
});

// Handle scrolling when clicking on the navbar button
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", (event) => {
  console.dir(event.target.dataset.link);
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) return;
  scrollIntoView(link);
});

// Handle click on "contact me" button on home
const homeContactBtn = document.querySelector("home__contact");
homeContactBtn.addEventListener("click", () => {
  scrollIntoView(".home__contact");
});
