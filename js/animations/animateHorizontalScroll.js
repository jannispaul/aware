import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function animateHorizontalScroll(params) {
  gsap.registerPlugin(ScrollTrigger);
  const wrapper = document.querySelector("[animate='horizontal-scroll']");

  // Scroll the section over
  function scrollRightToMax(element) {
    if (!element) return;
    element.scroll({
      // Scroll to maximum available value
      left: element.scrollWidth - element.clientWidth,
      behavior: "smooth",
    });
  }

  // Scroll trigger to watch when section is in the right spot
  gsap.from(wrapper, {
    // x: "-20%",
    ease: "power1.inOut",
    duration: 1,
    scrollTrigger: {
      start: "top center",
      end: "bottom 80%",
      trigger: wrapper,
      scrub: 1,
      onUpdate: (trigger) => {
        // console.log(trigger, wrapper.scrollWidth, wrapper.clientWidth);

        if (trigger.progress > 0.5) {
          scrollRightToMax(wrapper);
        }
      },
      // Prevents the scroll trigger from firing mulitple times
      onLeave: function (self) {
        self.scroll(self.start); // <-- sets position to start of ScrollTrigger
        self.disable();
        self.animation.progress(1);
      },
    },
  });
}
