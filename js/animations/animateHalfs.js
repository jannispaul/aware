// @ts-check
import { gsap } from "gsap";

export function animateHalfs() {
  //   gsap.from("[animate='half']", {
  //     opacity: 0,
  //   });

  let leftHalf = document.querySelector("[animate='left-half']");
  let rightHalf = document.querySelector("[animate='right-half']");

  if (!leftHalf || !rightHalf) return;

  // Animations
  let growLeft = gsap.timeline({ paused: true }).to(rightHalf.querySelector("h3"), { opacity: 0, duration: 0.4, display: "none" }).to(leftHalf, { duration: 0.75, flex: "1.5 1 0%", ease: "power2.inOut" }, 0);

  let growRight = gsap.timeline({ paused: true }).to(leftHalf.querySelector("h3"), { opacity: 0, duration: 0.4, display: "none" }).to(rightHalf, { duration: 0.75, flex: "1.5 1 0%", ease: "power2.inOut" }, 0);

  leftHalf.addEventListener("mouseenter", () => growLeft.play());
  leftHalf.addEventListener("mouseleave", () => growLeft.reverse());

  rightHalf.addEventListener("mouseenter", () => growRight.play());
  rightHalf.addEventListener("mouseleave", () => growRight.reverse());
}
