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
const scrollTriggerTitle = document.querySelector(
  ".scrolltrigger-section .title"
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
  if (isTop(scrollTriggerContent)) {
    if (!isActive) {
      addClass(scrollTriggerSection, "active");
      document.body.style.overflow = "hidden";
    }
  } else if (isBottom(scrollTriggerContent)) {
    if (isActive) {
      removeClass(scrollTriggerSection, "active");
      document.body.style.overflow = "";
    }
  }
}
function handleWindowScroll() {
  const isActive = scrollTriggerSection.classList.contains("active");
  const y = window.scrollY;
  console.log(y);
  if (!isActive) {
    if (y <= 0) {
      addClass(scrollTriggerSection, "active");
      document.body.style.overflow = "hidden";
    }
  }
}
//================================================================
function scrollTriggerSectionInit() {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: scrollTriggerContent,
        scroller: scrollTriggerContent,
        start: "top top",
        end: "top+=150 top",
        scrub: 1,
        markers: true,
      },
    })
    .to(scrollTriggerOverlay, {
      backgroundColor: "rgba(0,0,0,0.4)",
      ease: "none",
    })
    .to(
      headerWrap,
      {
        paddingInline: "2rem",
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
// function scrollTriggerSectionInit() {
//   ScrollTrigger.create({
//     trigger: scrollTriggerTitle,
//     scroller: scrollTriggerContent,
//     start: "top top",
//     end: "bottom bottom",
//     pin: scrollTriggerOverlay,
//     markers: true,
//     pinSpacing: false,
//     // onEnter: () => {
//     //   gsap.to(scrollTriggerOverlay, {
//     //     backgroundColor: "rgba(0,0,0,0.5)",
//     //     duration: 0.2,
//     //   });
//     //   gsap.to(headerMenuwrap, {
//     //     autoAlpha: 0,
//     //     duration: 0.2,
//     //   });
//     //   gsap.to(headerWrap, {
//     //     paddingInline: "2rem",
//     //     duration: 0.2,
//     //   });
//     // },
//     // onLeaveBack: () => {
//     //   gsap.to(scrollTriggerOverlay, {
//     //     backgroundColor: "rgba(0,0,0,0)",
//     //     duration: 0.2,
//     //   });
//     //   gsap.to(headerMenuwrap, {
//     //     autoAlpha: 1,
//     //     duration: 0.2,
//     //   });
//     //   gsap.to(headerWrap, {
//     //     paddingInline: "4rem",
//     //     duration: 0.2,
//     //   });
//     // },
//   });

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
scrollTriggerSectionInit();

handleContentScroll();
handleWindowScroll();
scrollTriggerContent.addEventListener("scroll", handleContentScroll);
window.addEventListener("scroll", handleWindowScroll);
