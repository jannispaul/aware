// @ts-check
import { gsap } from "gsap";

export function animateMenu() {
  //   gsap.from("[animate='half']", {
  //     opacity: 0,
  //   });

  let leftHalf = document.querySelector("[animate='left-half']");
  let rightHalf = document.querySelector("[animate='right-half']");

  let growLeft = gsap.to(leftHalf, {
    paused: true,
    flex: "1.5 1 0%",
    ease: "power2.inOut",
    duration: 1,
  });
  let growRight = gsap.to(rightHalf, {
    paused: true,
    flex: "1.5 1 0%",
    ease: "power2.inOut",
    duration: 1,
  });
  console.log(leftHalf);

  if (!leftHalf) return;
  leftHalf.addEventListener("mouseenter", () => growLeft.play());
  leftHalf.addEventListener("mouseleave", () => growLeft.reverse());
  if (!rightHalf) return;
  rightHalf.addEventListener("mouseenter", () => growRight.play());
  rightHalf.addEventListener("mouseleave", () => growRight.reverse());
}
