console.clear();
gsap.registerPlugin(ScrollTrigger);
const html = document.querySelector("html");
const body = document.querySelector("body");
const main = document.querySelector(".main");
const scrollTriggerSection = document.querySelector(".scrolltrigger-section");
const scrollTriggerBackground = document.querySelector(
  ".scrolltrigger-section .background"
);
const scrollTriggerOverlay = document.querySelector(
  ".scrolltrigger-section .bg-overlay"
);
const scrollTriggerContent = document.querySelector(
  ".scrolltrigger-section .content"
);
const scrollTriggerContentWrapper =
  scrollTriggerContent.querySelector(".content-wrapper");
const scrollTriggerTitle = document.querySelector(
  ".scrolltrigger-section .title"
);
const scrollTriggerVisualWrap = document.querySelector(
  ".scrolltrigger-section .visual-wrap"
);
const visualWrap = document.querySelector(".visual-wrap");
const headerMenuwrap = document.querySelector(".header-wrap .menuwrap");
const gentleVeganCare = document.querySelector(".gentlevegancare");
const bestSellers = document.querySelector(".bestsellers");
const bySkinType = document.querySelector(".byskintype");
const reviews = document.querySelector(".reviews");
const membership = document.querySelector(".membership");

function isTop(el) {
  return el.scrollTop <= 0;
}
function isBottom(el) {
  return el.scrollTop + el.clientHeight >= el.scrollHeight - 1;
}
function handleContentScroll() {
  const isActive = scrollTriggerSection.classList.contains("active");
  // const y = scrollTriggerContent.scrollTop;
  // console.log(y);
  // console.log(isActive);
  if (isTop(scrollTriggerContentWrapper)) {
    if (!isActive) {
      addClass(scrollTriggerSection, "active");
      document.body.style.overflow = "hidden";
    }
  } else if (isBottom(scrollTriggerContentWrapper)) {
    if (isActive) {
      removeClass(scrollTriggerSection, "active");
      document.body.style.overflow = "";
    }
  }
}
function handleWindowScroll() {
  const isActive = scrollTriggerSection.classList.contains("active");
  const y = window.scrollY;
  // console.log(y);
  if (!isActive) {
    if (y <= 0) {
      addClass(scrollTriggerSection, "active");
      document.body.style.overflow = "hidden";
    }
  }
}
//================================================================
function scrollTriggerInit() {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: scrollTriggerContentWrapper,
        scroller: scrollTriggerContentWrapper,
        start: "top top",
        end: "top+=150 top",
        scrub: 1,
        markers: true,
      },
    })
    .to(
      scrollTriggerOverlay,
      {
        backgroundColor: "rgba(0,0,0,0.4)",
        ease: "none",
      },
      0
    )
    .to(
      headerWrap,
      {
        opacity: "0.5",
        ease: "none",
      },
      0
    )
    .to(
      headerMenuwrap,
      {
        autoAlpha: 0,
        ease: "none",
      },
      0
    );
}
function initScrollAnimation() {
  gsap.to(scrollTriggerTitle, {
    yPercent: -10,
    scrollTrigger: {
      trigger: scrollTriggerTitle,
      scroller: scrollTriggerContentWrapper,
      start: "top top",
      end: "bottom bottom",
      scrub: 2,
    },
  });
  gsap.to(scrollTriggerVisualWrap, {
    yPercent: -5,
    scrollTrigger: {
      trigger: scrollTriggerVisualWrap,
      scroller: scrollTriggerContentWrapper,
      start: "top top",
      end: "bottom bottom",
      scrub: 2,
    },
  });
  // gsap.to(scrollTriggerContentWrapper, {
  //   y: -100,
  //   ease: "power4.out",
  //   scrollTrigger: {
  //     trigger: scrollTriggerContentWrapper,
  //     scroller: scrollTriggerContent,
  //     start: "top top",
  //     end: "bottom bottom",
  //     scrub: 7,
  //   },
  // });
}
// function scrollTriggerSectionInit() {

//   gsap
//     .timeline({
//       scrollTrigger: {
//         trigger: scrollTriggerTitle,
//         scroller: scrollTriggerContent,
//         start: "top top",
//         end: "top+=150 top",
//         scrub: 1,
//         markers: true,
//       },
//     })

//   // gsap.to(gentleVeganCare, {
//   //   scrollTrigger: {
//   //     scrub: 1,
//   //     trigger: visualWrap,
//   //     scroller: scrollTriggerContent,
//   //     start: "top top",
//   //     end: "bottom bottom",
//   //     markers: true,
//   //   },
//   // });
//   ScrollTrigger.create({
//     trigger: visualWrap,
//     scroller: scrollTriggerContent,
//     start: "top top",
//     end: "bottom+=100% top",
//     markers: true,
//     scrub: true,
//   });
// }
scrollTriggerInit();
initScrollAnimation();
handleContentScroll();
handleWindowScroll();
scrollTriggerContentWrapper.addEventListener("scroll", handleContentScroll);
window.addEventListener("scroll", handleWindowScroll);
