// @ts-check
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function animateScaleUp() {
  gsap.registerPlugin(ScrollTrigger);
  let scaleImage = document.querySelector("[animate='scale']");

  console.log(scaleImage);
  gsap.from(scaleImage, {
    scale: "0.85",
    borderRadius: "1.25rem",
    scrollTrigger: {
      start: "top bottom",
      end: "top middle",
      trigger: scaleImage,
      scrub: 1,
    },
  });
}
