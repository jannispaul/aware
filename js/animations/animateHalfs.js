// @ts-check
import { gsap } from "gsap";

export function animateHalfs() {
  //   gsap.from("[animate='half']", {
  //     opacity: 0,
  //   });

  let leftHalf = document.querySelector("[animate='left-half']");
  let rightHalf = document.querySelector("[animate='right-half']");
  // let videoLeft = leftHalf?.querySelector("video");
  let lottieLeft = leftHalf?.querySelector("lottie-player");
  let videoRight = rightHalf?.querySelector("video");

  if (!leftHalf || !rightHalf) return;

  // Animations
  let growLeft = gsap.timeline({ paused: true }).to(rightHalf.querySelector("h3"), { opacity: 0, duration: 0.4, display: "none" }).to(leftHalf, { duration: 0.7, flex: "1.5 1 0%", ease: "power2.inOut" }, 0);
  let growRight = gsap.timeline({ paused: true }).to(leftHalf.querySelector("h3"), { opacity: 0, duration: 0.4, display: "none" }).to(rightHalf, { duration: 0.7, flex: "1.5 1 0%", ease: "power2.inOut" }, 0);

  leftHalf.addEventListener("mouseenter", () => {
    growLeft.play();
    videoRight?.pause();
  });
  leftHalf.addEventListener("mouseleave", () => {
    growLeft.reverse();
    videoRight?.play();
  });

  rightHalf.addEventListener("mouseenter", () => {
    growRight.play();
    if (!lottieLeft) return;
    // @ts-ignore
    lottieLeft?.pause();
  });
  rightHalf.addEventListener("mouseleave", () => {
    growRight.reverse();
    if (!lottieLeft) return;
    // @ts-ignore
    lottieLeft?.play();
  });
}
