// @ts-check
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function animateScaleUp() {
  gsap.registerPlugin(ScrollTrigger);
  let scaleImage = document.querySelector("[animate='scale']");

  // Scale section up and down
  gsap
    .timeline({
      paused: true,
      scrollTrigger: {
        start: "top bottom",
        end: "bottom top",
        trigger: scaleImage,
        scrub: 1,
        // markers: true,
      },
    })
    .set(scaleImage, {
      scale: 0.85,
      borderRadius: "1.25rem",
    })
    .to(scaleImage, {
      scale: 1,
      borderRadius: "0",
    })
    .to(
      scaleImage,
      {
        scale: 0.85,
        borderRadius: "1.25rem",
        ease: "power1.in",
      },
      "+=0.25"
    );

  // Old scale up animation

  // console.log(scaleImage);
  // gsap.from(scaleImage, {
  //   scale: "0.85",
  //   borderRadius: "1.25rem",
  //   scrollTrigger: {
  //     start: "top bottom",
  //     end: "top middle",
  //     trigger: scaleImage,
  //     scrub: 1,
  //   },
}
