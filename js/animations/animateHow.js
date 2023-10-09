// @ts-check
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// https://greensock.com/docs/v3/Eases
// https://greensock.com/docs/v3/GSAP/Timeline/addLabel()

export function animateHow() {
  gsap.registerPlugin(ScrollTrigger);
  // Get element
  const stepsWrapper = document.querySelector("[data-element='step-wrapper']");
  // @ts-ignore
  const steps = Array.from(stepsWrapper?.children);
  const imageWrapper = document.querySelector("[data-element='image-wrapper']");
  // @ts-ignore
  const images = Array.from(imageWrapper?.children);
  // const howSection = document.querySelector("[animate='how-section']");
  let numberOfSections = 4;
  let previousIndex = 0;
  let duration = 0.5;
  const numberColorActive = getComputedStyle(document.documentElement).getPropertyValue("--neutrals--900");
  const numberColorInactive = getComputedStyle(document.documentElement).getPropertyValue("--neutrals--300");

  // Function to set inital state of steps
  function init() {
    steps.slice(1).forEach((step, index) => {
      gsap.set(step.querySelector("[animate='heading']"), {
        display: "none",
        opacity: 0,
      });
      gsap.set(step.querySelector("[animate='copy']"), {
        display: "none",
        opacity: 0,
      });
      gsap.set(step.querySelector("[animate='number']"), {
        color: numberColorInactive,
      });
    });
  }
  init();

  // Main animation that runs on scrolltrigger update
  // TODO: Refactor so each element has a timeline
  function animate(currentIndex) {
    // if (Math.abs(currentIndex - previousIndex) < 0.1) return;

    currentIndex = Math.trunc(currentIndex);

    // If the index hasnt changed, images or steps is not defined
    if (currentIndex === previousIndex || !steps || !images) return;
    console.log("current", currentIndex, "previous", previousIndex);

    currentIndex === numberOfSections && currentIndex--;

    // Show current image
    gsap
      .timeline()
      .to(images[currentIndex], {
        zIndex: 2,
      })
      .to(images[currentIndex], {
        opacity: 1,
        duration: duration * 1.5,
      });
    // Select images to be hidden
    let hiddenImages = images.slice();
    hiddenImages.splice(currentIndex, 1);
    // After the current image animation is finished, hide the others
    gsap.delayedCall(duration * 2, () => {
      gsap.set(hiddenImages, {
        opacity: 0,
        zIndex: 1,
      });
    });

    // Get hidden steps
    let hiddenSteps = steps.slice();

    hiddenSteps.splice(currentIndex, 1);
    // Get Elements to hide withtin the steps
    if (previousIndex < numberOfSections) {
      gsap
        .timeline()
        // Fadeout heading and copy, and hide them
        .to(
          steps[previousIndex].querySelector("[animate='heading']"),
          {
            opacity: 0,
            duration: duration,
          },
          0
        )
        .set(
          steps[previousIndex].querySelector("[animate='heading']"),
          {
            display: "none",
          },
          duration
        )
        .addLabel("afterFadeout")
        .to(
          steps[previousIndex].querySelector("[animate='copy']"),
          {
            opacity: 0,
            duration: duration,
          },
          0
        )
        .set(
          steps[previousIndex].querySelector("[animate='copy']"),
          {
            display: "none",
          },
          "afterFadeout"
        )
        // Start the scaling of the steps
        .to(
          steps[previousIndex],
          {
            flex: "0 1 10%",
            duration: duration * 4,
            ease: "power2.inOut",
          },
          "afterFadeout"
        )
        .to(
          steps[currentIndex],
          {
            flex: "0 1 100%",
            duration: duration * 4,
            ease: "power2.inOut",
          },
          "afterFadeout"
        )
        .addLabel("afterStepScale")
        .to(
          steps[previousIndex].querySelector("[animate='number']"),
          {
            color: numberColorInactive,
            duration: duration * 2,
          },
          0
        )
        // Fade in the heading and copy
        .set(
          steps[currentIndex].querySelector("[animate='heading']"),
          {
            display: "flex",
          },
          "afterStepScale"
        )
        .to(
          steps[currentIndex].querySelector("[animate='heading']"),
          {
            opacity: 1,
            duration: duration * 2,
          },
          "afterStepScale"
        )
        .set(
          steps[currentIndex].querySelector("[animate='copy']"),
          {
            display: "flex",
          },
          "afterStepScale"
        )
        .to(
          steps[currentIndex].querySelector("[animate='copy']"),
          {
            opacity: 1,
            duration: duration * 2,
          },
          "afterStepScale"
        )
        .to(
          steps[currentIndex].querySelector("[animate='number']"),
          {
            color: numberColorActive,
            duration: duration * 3,
          },
          0
        );
    }
    previousIndex = currentIndex;
  }
  // Scrolltrigger that
  ScrollTrigger.create({
    start: "top top",
    pin: false,
    end: "bottom bottom",
    trigger: "[animate='how-section']",
    scrub: false,
    // markers: true,
    onUpdate: (event) => {
      let currentIndex = event.progress * numberOfSections;
      animate(currentIndex);
    },
  });
}
