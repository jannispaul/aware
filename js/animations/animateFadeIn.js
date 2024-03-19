import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function animateFadeIn() {
  gsap.registerPlugin(ScrollTrigger);
  // Get sections and fadein nodes
  let animatedSections = document.querySelectorAll("[animate='section']");
  let allFadeInItems = document.querySelectorAll("[fade-in]");
  let individualItems = Array.from(allFadeInItems).filter((items) => !items.closest("[animate='section']"));

  // Animation duration
  let duration = 0.6;
  let staggerBasis = 0.4;

  // When there is nothing to fade in, return
  if (!animatedSections && !allFadeInItems) return;

  gsap.set(allFadeInItems, { transformOrigin: "left" });

  // Animate fadeIn items in sections with stagger
  animatedSections.forEach((section) => {
    //  Get all elements in section
    let elements = section.querySelectorAll("[fade-in]");
    // If there are many, the stagge time will decrease
    let staggerTime = staggerBasis / (elements.length / 2);
    // Set transform origin to left for rotation

    gsap.set(elements, { autoAlpha: 1 });

    // ANimation 1
    // Main animation
    gsap
      .timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
        },
      })
      .from(elements, {
        opacity: 0,
        autoAlpha: 0,
        duration: duration,
        ease: "power1.in",
        stagger: staggerTime,
      })
      .from(
        elements,
        {
          y: "2rem",
          rotateZ: 2,
          duration: duration,
          ease: "circ.out",
          stagger: staggerTime,
        },
        0 // start both tweens at 0
      );
  });

  // Animation 2
  // Animate individual items fadein
  individualItems.forEach((item, index) => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: item,
          start: "top 70%",
        },
      })
      .from(item, {
        opacity: 0,
        duration: duration,
        ease: "power1.in",
        autoAlpha: 0,
      })
      .from(
        item,
        {
          y: "2rem",
          rotateZ: 2,
          duration: duration,
          ease: "circ.out",
        },
        0 // start both tweens at 0
      );
  });
}
