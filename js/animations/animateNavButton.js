import { gsap } from "gsap";
import { gsap } from "https://cdn.skypack.dev/gsap@3.10.4";
import { isMenuOpen } from "../utils/isMenuOpen";

export function animateNavButton() {
  const navButton = document.querySelector("[data-element='nav-button']");
  let duration = 0.3;

  // Animation timeline
  let timeline = gsap
    .timeline({ paused: true })
    .to(".menu-icon_line-top", { clipPath: "inset(0 0 0 100%)", duration, ease: "power2.in" })
    .to(".menu-icon_line-bottom", { clipPath: "inset(0 0 0 100%)", ease: "power2.in" }, duration / 2)
    .set(".menu-icon_line-top", { clipPath: "inset(0 100% 0 0)" })
    .set(".menu-icon_line-bottom", { clipPath: "inset(0 100% 0 0)" })
    .to(".menu-icon_line-top", { clipPath: "inset(0 0% 0 0)", ease: "power2.out" })
    .to(".menu-icon_line-bottom", { clipPath: "inset(0 0% 0 0)", ease: "power2.out" }, "<=" + duration / 2);

  // Play animation if menu is not open
  function playAnimation() {
    if (isMenuOpen()) return;
    timeline.restart();
  }
  // Run play function on hover
  navButton.addEventListener("mouseenter", playAnimation);
}
