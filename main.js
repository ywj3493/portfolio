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
    navbarMenu.classList.remove("open");
  } else {
    navbar.classList.add("navbar--blue");
  }
});

// Handle scrolling when clicking on the navbar button
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) return;
  scrollIntoView(link);
  navbarMenu.classList.remove("open");
  navbar.classList.remove("navbar--blue");
});

// Navbar toggle button for small screen
const navbarToggleBtn = document.querySelector(".navbar__toggle-btn");
navbarToggleBtn.addEventListener("click", () => {
  navbarMenu.classList.toggle("open");
  navbar.classList.add("navbar--blue");
});

// Handle click on "contact me" button on home
const homeContactBtn = document.querySelector(".home__contact");
homeContactBtn.addEventListener("click", () => {
  scrollIntoView("#contact");
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

//Projects
const workBtnContainer = document.querySelector(".work__categories");
const projectContainer = document.querySelector(".work__projects");
const projects = document.querySelectorAll(".project");
workBtnContainer.addEventListener("click", (e) => {
  // 그럼 둘다 있을땐 true 뜨나?
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
  if (filter == null) {
    return;
  }
  //Remove selection from the previos item and select the new one
  const active = document.querySelector(".category__btn.selected");
  active.classList.remove("selected");
  const target =
    e.target.nodeName === "BUTTON" ? e.target : e.target.parentNode;
  target.classList.add("selected");
  projectContainer.classList.add("anim-out");
  setTimeout(() => {
    //js 모든 코드는 브라우저에서 동기적으로 처리 되기 때문에 filtering 로직 또한 늦게 이루어 져야한다.
    projects.forEach((project) => {
      if (filter === "All" || filter === project.dataset.type) {
        project.classList.remove("invisible");
      } else {
        project.classList.add("invisible");
      }
    });
    projectContainer.classList.remove("anim-out");
  }, 300);
});
