// @ts-check
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function animateExample() {
  gsap.registerPlugin(ScrollTrigger);

  const el = gsap.utils.toArray("[animate='text']")[0];
  let animation = gsap.to(el, {
    paused: true,
    flex: "1.5 1 0%",
    ease: "power2.inOut",
    duration: 1,
  });

  el.addEventListener("mouseenter", () => animation.play());
  el.addEventListener("mouseleave", () => animation.reverse());
}
