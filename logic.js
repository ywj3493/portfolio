"use strict";

//Make navbar transparent when it is on the top
let navActive = false;
document.addEventListener("scroll", () => {
  if (window.scrollY == 0) {
    document.querySelector("#navbar").classList.remove("navbar--blue");
    navActive = false;
  } else {
    if (!navActive) {
      console.dir("scroll");
      document.querySelector("#navbar").classList.add("navbar--blue");
      navActive = true;
    }
  }
});

//Handle scrolling when clicking on the navbar button
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) return;
  const selectedElement = document.querySelector(link);
  selectedElement.scrollIntoView({ behavior: "smooth" });
});

//Handle scrolling when clicking on the contact me button
const contactMeBtn = document.querySelector(".home__contact");
contactMeBtn.addEventListener("click", (event) => {
  console.dir("click");
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) return;
  const selectedElement = document.querySelector(link);
  selectedElement.scrollIntoView({ behavior: "smooth" });
});
