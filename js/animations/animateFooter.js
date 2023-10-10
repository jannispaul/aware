// @ts-check
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function animateFooter() {
  gsap.registerPlugin(ScrollTrigger);
  let animation = gsap.from("footer", {
    y: "-80%",
    ease: "none",
    duration: 1,
    scrollTrigger: {
      start: "top bottom",
      end: "bottom 90%",
      // markers: true,
      trigger: "footer",
      scrub: true,
    },
  });
  // console.log(animation);
}
