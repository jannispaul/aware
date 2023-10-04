// @ts-check
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function animateNav() {
  gsap.registerPlugin(ScrollTrigger);

  const scollAnimation = gsap.timeline({ paused: true });

  scollAnimation
    .to("[animate='nav']", {
      //   yPercent: -100,
      duration: 0.4,
      background: "white",
      color: "#000",
      boxShadow: "0px 1px 10px 0px rgba(0, 0, 0, 0.04)",
    })
    .to(
      ".is-outline-light",
      {
        color: "#000",
        background: "rgba(0,0,0,0.04)",
        borderColor: "#000",
      },
      0
    )
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
  // .progress(1);

  ScrollTrigger.create({
    trigger: "body",
    start: "top top",
    end: "+=200",
    markers: false,
    scrub: 0,
    onUpdate: (self) => {
      self.direction === 1 ? scollAnimation.play() : scollAnimation.reverse();
    },
  });

  const openAnimation = gsap.timeline({
    paused: true,
  });

  openAnimation.to(".navbar_component", {
    borderRadius: 0,
    duration: 0.2,
  });

  // Stop body scroll when mobile menu is open
  // const body = document.body;
  // function letBodyScroll(bool) {
  //     if (bool) {
  //             body.style.overflow = 'hidden';
  //     } else {
  //         body.style.overflow = 'auto';
  //     }
  // }

  const targetNode = document.querySelector(".w-nav-button");
  const config = { attributes: true, childList: false, subtree: false };
  const callback = function (mutationsList, observer) {
    for (let i = 0; i < mutationsList.length; i++) {
      if (mutationsList[i].type === "attributes") {
        console.log(targetNode);
        const menuIsOpen = mutationsList[i].target.classList.contains("w--open");
        menuIsOpen ? openAnimation.play() : openAnimation.reverse();
      }
    }
  };
  if (!targetNode) return;
  const observer = new MutationObserver(callback);
  observer.observe(targetNode, config);

  // scrub: 1,

  //   ScrollTrigger.create({
  //     trigger: "body",
  //     start: "top top",
  //     end: "max",
  //     onUpdate: (self) => {
  //       self.direction === 1 ? scollAnimation.play() : scollAnimation.reverse();
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
