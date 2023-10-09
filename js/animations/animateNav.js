// @ts-check
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function animateNav() {
  gsap.registerPlugin(ScrollTrigger);
  const navButton = document.querySelector(".is-nav.is-outline-light");

  // On scroll turn background white, box shadow, and turn element black
  const scrollAnimation = gsap.timeline({ paused: true });
  let isScrolledToTop = true;

  scrollAnimation
    .to("[animate='nav']", {
      //   yPercent: -100,
      duration: 0.4,
      background: "white",
      color: "#000",
      boxShadow: "0px 1px 10px 0px rgba(0, 0, 0, 0.04)",
    })
    .to(
      ".navbar_logo-link",
      {
        color: "#08031B",
      },
      0
    )
    .to(
      ".menu-icon_line-top, .menu-icon_line-bottom",
      {
        background: "#08031B",
      },
      0
    );

  // When page scrolled show scroll animation and reverse when up
  ScrollTrigger.create({
    trigger: "body",
    start: "top top",
    end: "+=200",
    markers: false,
    scrub: 0,
    onUpdate: (self) => {
      //   console.log(self.direction);
      if (self.direction === 1) {
        isScrolledToTop = false;
        scrollAnimation.play();
        // Change button to dark button
        navButton?.classList.remove("is-outline-light");
        navButton?.classList.add("is-outline");
      } else {
        isScrolledToTop = true;
        scrollAnimation.reverse();
        // Change button to ligth button
        navButton?.classList.remove("is-outline");
        navButton?.classList.add("is-outline-light");
      }
    },
  });

  //   const borderRadiusAnimation = gsap.timeline({
  //     paused: true,
  //   });

  const borderRadiusAnimation = gsap.to(".navbar_component", {
    borderRadius: 0,
    duration: 0.1,
    // paused: true,
  });

  //   const openAnimation = scrollAnimation;
  //   .add(borderRadiusAnimation, "<");

  //   Mutation observer variables
  let menuIsOpen = false;
  const targetNode = document.querySelector(".w-nav-button");
  const config = { attributes: true, childList: false, subtree: false };

  const callback = function (mutationsList, observer) {
    for (let i = 0; i < mutationsList.length; i++) {
      if (mutationsList[i].type === "attributes") {
        // console.log(targetNode);
        menuIsOpen = mutationsList[i].target.classList.contains("w--open");
        if (menuIsOpen) {
          scrollAnimation.play();
          borderRadiusAnimation.play();
        } else if (!menuIsOpen && isScrolledToTop) {
          scrollAnimation.reverse();
          gsap.delayedCall(0.3, () => borderRadiusAnimation.reverse());
        } else {
          gsap.delayedCall(0.3, () => borderRadiusAnimation.reverse());
        }
      }
    }
  };
  if (!targetNode) return;
  const observer = new MutationObserver(callback);
  observer.observe(targetNode, config);

  //   ScrollTrigger.create({
  //     trigger: "body",
  //     start: "top top",
  //     end: "max",
  //     onUpdate: (self) => {
  //       self.direction === 1 ? scrollAnimation.play() : scrollAnimation.reverse();
  //     },
  //   });

  //   ScrollTrigger.create({
  //     trigger: ".second",
  //     endTrigger: "body",
  //     start: "top top",
  //     markers: true,
  //     end: "bottom bottom",
  //     onEnter: () => {
  //       console.log("enter");
  //       gsap.set("nav", {
  //         position: "fixed",
  //       });
  //     },
  //     onLeaveBack: () => {
  //       console.log("leaveBack");
  //       gsap.set("nav", {
  //         position: "absolute",
  //       });
  //     },
  //   });

  //   gsap.to("nav", {
  //     backgroundColor: "purple",
  //     scrollTrigger: {
  //       trigger: ".first",
  //       start: "20% top",
  //       end: "+=100px",
  //       // markers: true,
  //       scrub: true,
  //     },
  //   });
}
