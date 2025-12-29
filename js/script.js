console.clear();
gsap.registerPlugin(ScrollTrigger);

const headerMenuWrap = document.querySelector(".menuwrap");
const headerWrap = document.querySelector(".header-wrap");
const menuBtnBox = document.querySelector("header .menu-btn-box");
const fullScreenMenu = document.querySelector(".fullscreen-menu");
const screenMenuCloseBtn = document.querySelector(
  ".fullscreen-menu .close-btn"
);
function headerMenuHovered() {
  headerMenuWrap.addEventListener("mouseenter", function () {
    addClass(headerWrap, "on");
  });
  headerMenuWrap.addEventListener("mouseleave", function () {
    removeClass(headerWrap, "on");
  });
}

function fullScreenMenuInit() {
  menuBtnBox.addEventListener("click", function () {
    const isActive = fullScreenMenu.classList.contains("active");
    console.log(isActive);
    if (!isActive) {
      addClass(fullScreenMenu, "active");
    }
  });
  screenMenuCloseBtn.addEventListener("click", function () {
    const isActive = fullScreenMenu.classList.contains("active");
    console.log(isActive);

    if (isActive) {
      removeClass(fullScreenMenu, "active");
    }
  });
}
function addClass(el, className) {
  el.classList.add(className);
}
function removeClass(el, className) {
  el.classList.remove(className);
}

headerMenuHovered();
fullScreenMenuInit();
