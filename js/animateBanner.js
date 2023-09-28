// @ts-check
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function animateBanner() {
  gsap.registerPlugin(ScrollTrigger);
  let bannerTracks = document.querySelectorAll("[animate='banner-track']");

  gsap.from(bannerTracks[0], {
    x: "-20%",
    ease: "none",
    duration: 1,
    scrollTrigger: {
      start: "top bottom",
      end: "bottom top",
      trigger: bannerTracks[0],
      scrub: 1,
    },
  });

  gsap.to(bannerTracks[1], {
    x: "-20%",
    ease: "none",
    duration: 1,
    scrollTrigger: {
      start: "top bottom",
      end: "bottom top",
      trigger: bannerTracks[1],
      scrub: 1,
    },
  });
}
