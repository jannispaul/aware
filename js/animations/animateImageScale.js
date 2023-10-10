// @ts-check
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function animateImageScale() {
  gsap.registerPlugin(ScrollTrigger);
  let scaleImage = document.querySelector("[animate='image-scale']");

  // console.log(scaleImage);
  gsap.from(scaleImage, {
    scale: "1.4",
    scrollTrigger: {
      start: "top bottom",
      end: "bottom middle",
      trigger: scaleImage,
      scrub: 1,
    },
  });
}
