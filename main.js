"use strict";

//scrollIntoView Smooth
function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}

//Make navbar transparent when it is on the top;
// getElementId 보다 querySelector 가 표준화 되어있음 id 뿐만 아니라 클래스 등으로 element를 가져 올 수 있기 때문
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
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
const homeContactBtn = document.querySelector(".home__contact");
homeContactBtn.addEventListener("click", () => {
  scrollIntoView(".home__contact");
});

// Make home slowly fade to transparent as the window scrolls down
const home = document.querySelector(".home__container");
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  // js 에서는 이렇게 style 객체에 property로 실시간 계산 값을 넘겨 줄 수 있다!!
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

//Show "arrow up" button when scrolling down
const arrowUp = document.querySelector(".arrow-up");
document.addEventListener("scroll", () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.classList.add("visible");
  } else {
    arrowUp.classList.remove("visible");
  }
});

//Handle click on the "arrow up" button
arrowUp.addEventListener("click", () => {
  scrollIntoView("#home");
});
