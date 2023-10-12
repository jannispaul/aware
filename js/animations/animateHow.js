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

  let sections = document.querySelectorAll("[animate^='step-']");

  sections.forEach((section, index) => {
    const triggerPercent = index * 50;
    const animation = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: `top ${-triggerPercent}%`,
        end: `top ${triggerPercent + 25}%`,
        markers: true,
        // scrub: 1,
      },
    });

    animation.fromTo(
      section,
      {
        flex: "1 1 0%",
      },
      {
        flex: "1 0 10%",
        ease: "power1.inOut",
        delay: 0.1,
      }
    );

    const h3 = section.querySelector("h3");
    const p = section.querySelector("p");

    // Check if h3 and p exist inside the section
    if (h3 && p) {
      animation
        .to(
          [h3, p],
          {
            opacity: 1, // Fade out h3 and p
            ease: "power1.inOut",
          },
          0
        )
        .to(
          [h3, p],
          {
            // width: "auto", // Fade out h3 and p
            display: "block", // Fade out h3 and p
            // ease: "power1.inOut",
          },
          0
        );
    }

    sections.forEach((otherSection, otherIndex) => {
      if (otherIndex !== index) {
        animation.to(
          otherSection,
          {
            flex: "0 1 0%",
            ease: "power1.inOut",
          },
          0
        );

        const otherH3 = otherSection.querySelector("h3");
        const otherP = otherSection.querySelector("p");

        // Check if other sections have h3 and p elements
        if (otherH3 && otherP) {
          animation
            .to(
              [otherH3, otherP],
              {
                opacity: 0, // Fade in h3 and p in other sections
                ease: "power1.inOut",
              },
              0
            )
            .to(
              [otherH3, otherP],
              {
                // width: 0,
                display: "none",
              },
              0
            );
        }
      }
    });
  });

  // // Scrolltrigger that
  // let scrollTrigger = ScrollTrigger.create({
  //   start: "top top",
  //   pin: false,
  //   end: "bottom bottom",
  //   trigger: "[animate='how-section']",
  //   scrub: 200,
  //   markers: true,

  //   // markers: true,
  //   onUpdate: (event) => {
  //     let currentIndex = event.progress * numberOfSections;
  //     // animate(currentIndex);
  //   },
  // });

  // function fadeIn(item) {
  //   console.log("fadein");
  //   let tl = gsap
  //     .timeline()
  //     .fromTo(item, { flex: "0 1 0%" }, { flex: "1 0 10%", duration: duration })
  //     .fromTo(item + " h3", { opacity: 0 }, { opacity: 1, duration: duration }, 0)
  //     .fromTo(item + " p", { opacity: 0 }, { opacity: 1, duration: duration }, 0);
  //   return tl;
  // }
  // function fadeOut(item) {
  //   let tl = gsap
  //     .timeline()
  //     .fromTo(item, { flex: "1 0 10%" }, { flex: "0 1 0%", duration: duration })
  //     .fromTo(item + " h3", { opacity: 1 }, { opacity: 0, duration: duration }, 0)
  //     .fromTo(item + " p", { opacity: 1 }, { opacity: 0, duration: duration }, 0);
  //   return tl;
  // }

  // gsap
  //   .timeline({ scrollTrigger: scrollTrigger, markers: true, toggleActions: "restart pause resume reverse" })
  //   // @ts-ignore
  //   .add(fadeIn("[animate='step-1']"), 0)
  //   // @ts-ignore
  //   .add(fadeOut("[animate='step-1']"), 1)
  //   // @ts-ignore
  //   .add(fadeIn("[animate='step-2']"), 1)
  //   // @ts-ignore
  //   .add(fadeOut("[animate='step-2']"), 2)
  //   // @ts-ignore
  //   .add(fadeIn("[animate='step-3']"), 2)
  //   // @ts-ignore
  //   .add(fadeOut("[animate='step-3']"), 3)
  //   // @ts-ignore
  //   .add(fadeIn("[animate='step-4']"), 3);

  // .set("[animate*='step']", { flex: "0 1 0%", duration: duration })
  // .to(steps[0], { flex: "1 0 10%", duration: duration })
  // .to("[animate='step-1'] h3", { opacity: 0, duration: duration })
  // .to("[animate='step-1'] p", { opacity: 0, duration: duration })
  // .to(steps[0], { flex: "1 1 0%", duration: duration })
  // .to(steps[1], { flex: "1 0 10%", duration: duration }, "-=" + duration)
  // .to("[animate='step-2'] h3", { opacity: 1, duration: duration })
  // .to("[animate='step-2'] p", { opacity: 1, duration: duration });

  // Function to set inital state of steps
  function init() {
    //@ts-ignore
    gsap.set(steps[0], { flex: "1 0 10%" });
    steps.slice(1).forEach((step, index) => {
      gsap.set(step, {
        flex: "1 1 0%",
      });
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
  // function animate(currentIndex) {
  //   // if (Math.abs(currentIndex - previousIndex) < 0.1) return;

  //   currentIndex = Math.trunc(currentIndex);

  //   // If the index hasnt changed, images or steps is not defined
  //   if (currentIndex === previousIndex || !steps || !images) return;
  //   console.log("current", currentIndex, "previous", previousIndex);

  //   currentIndex === numberOfSections && currentIndex--;

  //   // Show current image
  //   gsap
  //     .timeline()
  //     .to(images[currentIndex], {
  //       zIndex: 2,
  //     })
  //     .to(images[currentIndex], {
  //       opacity: 1,
  //       duration: duration * 1.5,
  //     });
  //   // Select images to be hidden
  //   let hiddenImages = images.slice();
  //   hiddenImages.splice(currentIndex, 1);
  //   // After the current image animation is finished, hide the others
  //   gsap.delayedCall(duration * 2, () => {
  //     gsap.set(hiddenImages, {
  //       opacity: 0,
  //       zIndex: 1,
  //     });
  //   });

  //   // Get hidden steps
  //   let hiddenSteps = steps.slice();

  //   hiddenSteps.splice(currentIndex, 1);
  //   // Get Elements to hide withtin the steps
  //   if (previousIndex < numberOfSections) {
  //     gsap
  //       .timeline()
  //       // Fadeout heading and copy, and hide them
  //       .to(
  //         steps[previousIndex].querySelector("[animate='heading']"),
  //         {
  //           opacity: 0,
  //           duration: duration,
  //         },
  //         0
  //       )
  //       .set(
  //         steps[previousIndex].querySelector("[animate='heading']"),
  //         {
  //           display: "none",
  //         },
  //         duration
  //       )
  //       .addLabel("afterFadeout")
  //       .to(
  //         steps[previousIndex].querySelector("[animate='copy']"),
  //         {
  //           opacity: 0,
  //           duration: duration,
  //         },
  //         0
  //       )
  //       .set(
  //         steps[previousIndex].querySelector("[animate='copy']"),
  //         {
  //           display: "none",
  //         },
  //         "afterFadeout"
  //       )
  //       // Start the scaling of the steps
  //       .to(
  //         steps[previousIndex],
  //         {
  //           flex: "0 1 10%",
  //           duration: duration * 4,
  //           ease: "power2.inOut",
  //         },
  //         "afterFadeout"
  //       )
  //       .to(
  //         steps[currentIndex],
  //         {
  //           flex: "0 1 100%",
  //           duration: duration * 4,
  //           ease: "power2.inOut",
  //         },
  //         "afterFadeout"
  //       )
  //       .addLabel("afterStepScale")
  //       .to(
  //         steps[previousIndex].querySelector("[animate='number']"),
  //         {
  //           color: numberColorInactive,
  //           duration: duration * 2,
  //         },
  //         0
  //       )
  //       // Fade in the heading and copy
  //       .set(
  //         steps[currentIndex].querySelector("[animate='heading']"),
  //         {
  //           display: "flex",
  //         },
  //         "afterStepScale"
  //       )
  //       .to(
  //         steps[currentIndex].querySelector("[animate='heading']"),
  //         {
  //           opacity: 1,
  //           duration: duration * 2,
  //         },
  //         "afterStepScale"
  //       )
  //       .set(
  //         steps[currentIndex].querySelector("[animate='copy']"),
  //         {
  //           display: "flex",
  //         },
  //         "afterStepScale"
  //       )
  //       .to(
  //         steps[currentIndex].querySelector("[animate='copy']"),
  //         {
  //           opacity: 1,
  //           duration: duration * 2,
  //         },
  //         "afterStepScale"
  //       )
  //       .to(
  //         steps[currentIndex].querySelector("[animate='number']"),
  //         {
  //           color: numberColorActive,
  //           duration: duration * 3,
  //         },
  //         0
  //       );
  //   }
  //   previousIndex = currentIndex;
  // }
}
