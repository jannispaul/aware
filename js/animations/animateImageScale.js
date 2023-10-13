// @ts-check
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Footer images scale animation
export function animateImageScale() {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from("[animate = 'image-scale']", {
    scale: "1.4",
    scrollTrigger: {
      start: "top bottom",
      end: "bottom bottom",
      trigger: "[animate='image-scale']",
      // markers: true,
      scrub: 1,
      onUpdate: (trigger) => {
        console.log(trigger.progress);
      },
    },
  });
}
