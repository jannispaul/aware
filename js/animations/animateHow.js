// @ts-ignore
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// https://greensock.com/docs/v3/Eases
// https://greensock.com/docs/v3/GSAP/Timeline/addLabel()
// https://gsap.com/community/forums/topic/26587-scrolltrigger-with-horizontal-items-and-scale-updown-effect/

export function animateHow() {
  gsap.registerPlugin(ScrollTrigger);
  // Get elements
  const section = document.querySelector("[animate='how-section']");
  const container = document.querySelector("[animate='container']");
  const stepsWrapper = section.querySelector("[animate='step-wrapper']");
  const steps = Array.from(stepsWrapper?.children);
  const imageWrapper = section.querySelector("[animate='image-wrapper']");
  const images = Array.from(imageWrapper?.children);
  const numberColorActive = getComputedStyle(document.documentElement).getPropertyValue("--neutrals--900");
  const numberColorInactive = getComputedStyle(document.documentElement).getPropertyValue("--neutrals--300");

  // Get height of Nav
  const navHeight = gsap.getProperty("[animate='nav']", "height");

  // Function to set min height of section
  function setSectionHeight() {
    // Get padding of section
    const sectionPadding = gsap.getProperty(container?.parentNode?.parentNode, "padding-top");

    // Calculate the height so that section fits whole viewport under the nav
    let containerHeight = window.innerHeight - navHeight - sectionPadding * 2;
    // Set height
    gsap.set(container, { minHeight: containerHeight });
  }

  gsap
    .timeline({
      paused: true,
      scrollTrigger: {
        trigger: section,
        start: "top " + navHeight,
        end: "+=3000 bottom",
        pin: section,
        // markers: true,
        scrub: 1,
      },
    })
    // Set all steps but step 1 to small
    .set(steps.slice(1), {
      flex: "0 1 0%",
    })
    // .set(
    //   images.slice(1),
    //   {
    //     opacity: 0,
    //   },
    //   "<"
    // )
    // Step 1 Animation
    // Scale up first step
    .to("[animate='step-1']", {
      flex: "1 0 10%",
      duration: 1,
      ease: "power1.inOut",
    })
    .to(
      images[0],
      {
        opacity: 1,
      },
      "<"
    )
    // Push number color
    .to(
      "[animate='step-1'] [animate='number']",
      {
        color: numberColorActive,
        duration: 1,
      },
      "<"
    )
    // Show headline
    .to(
      "[animate='step-1'] h3, [animate='step-1'] p",
      {
        display: "block",
        opacity: 1,
        duration: 1,
        delay: 1,
      },
      "<"
    )
    // Hide headline
    .to(
      "[animate='step-1'] h3, [animate='step-1'] p",
      {
        display: "none",
        opacity: 0,
        duration: 1,
      },
      "<2"
    )
    // Dim number color
    .to(
      "[animate='step-1'] [animate='number']",
      {
        color: numberColorInactive,
        duration: 1,
      },
      "<"
    )
    // Scale down step 1
    .to(
      "[animate='step-1']",
      {
        flex: "0 1 0%",
        duration: 1,
        delay: 1,
        ease: "power1.inOut",
      },
      "<"
    )
    // Hide image 1
    .to(
      images[0],
      {
        opacity: 0,
        duration: 1,
      },
      "<"
    )

    // Step 2 Animation
    // scale up step 2
    .to(
      "[animate='step-2']",
      {
        flex: "1 0 10%",
        duration: 1,
        ease: "power1.inOut",
      },
      "<"
    )
    // Show image
    .to(
      images[1],
      {
        opacity: 1,
      },
      "<"
    )
    // Push number color
    .to(
      "[animate='step-2'] [animate='number']",
      {
        color: numberColorActive,
        duration: 1,
      },
      "<"
    )
    // Show headline
    .to(
      "[animate='step-2'] h3, [animate='step-2'] p",
      {
        display: "block",
        opacity: 1,
        duration: 1,
        delay: 1,
      },
      "<"
    )
    // hide headline
    .to(
      "[animate='step-2'] h3, [animate='step-2'] p",
      {
        display: "none",
        opacity: 0,
        duration: 1,
      },
      "<2"
    )
    // Dim Number color
    .to(
      "[animate='step-2'] [animate='number']",
      {
        color: numberColorInactive,
        duration: 1,
      },
      "<"
    )
    // Scale down step 2
    .to(
      "[animate='step-2']",
      {
        flex: "0 1 0%",
        duration: 1,
        delay: 1,
        ease: "power1.inOut",
      },
      "<"
    )
    // Hide image 2
    .to(
      images[1],
      {
        opacity: 0,
        duration: 1,
      },
      "<"
    )
    // Step 3 Animation
    // scale up step 3
    .to(
      "[animate='step-3']",
      {
        flex: "1 0 10%",
        duration: 1,
        ease: "power1.inOut",
      },
      "<"
    )
    // Show image 3
    .to(
      images[2],
      {
        opacity: 1,
      },
      "<"
    )
    // Push number color
    .to(
      "[animate='step-3'] [animate='number']",
      {
        color: numberColorActive,
        duration: 1,
      },
      "<"
    )
    // Show headline
    .to(
      "[animate='step-3'] h3, [animate='step-3'] p",
      {
        display: "block",
        opacity: 1,
        duration: 1,
        delay: 1,
      },
      "<"
    )
    // hide headline
    .to(
      "[animate='step-3'] h3, [animate='step-3'] p",
      {
        display: "none",
        opacity: 0,
        duration: 1,
      },
      "<2"
    )
    // Dim Number color
    .to(
      "[animate='step-3'] [animate='number']",
      {
        color: numberColorInactive,
        duration: 1,
      },
      "<"
    )
    // Scale down step 3
    .to(
      "[animate='step-3']",
      {
        flex: "0 1 0%",
        duration: 1,
        delay: 1,
        ease: "power1.inOut",
      },
      "<"
    )
    // Hide image 3
    .to(
      images[2],
      {
        opacity: 0,
        duration: 1,
      },
      "<"
    )
    // Step 4 Animation
    // scale up step 4
    .to(
      "[animate='step-4']",
      {
        flex: "1 0 10%",
        duration: 1,
        ease: "power1.inOut",
      },
      "<"
    )
    .to(
      images[3],
      {
        opacity: 1,
      },
      "<"
    )
    // Push number color
    .to(
      "[animate='step-4'] [animate='number']",
      {
        color: numberColorActive,
        duration: 1,
      },
      "<"
    )
    // Show headline
    .to(
      "[animate='step-4'] h3, [animate='step-4'] p",
      {
        display: "block",
        opacity: 1,
        duration: 1,
        delay: 1,
      },
      "<"
    )
    .to(
      "[animate='step-4']",
      {
        opacity: 1,
      },
      "<2"
    );

  // Function to set inital state of steps
  function init() {
    // Hide all images other than image 1
    gsap.set(images.slice(1), { opacity: 0 });

    // Set first step
    gsap.set(steps[0], { flex: "1 0 10%" });

    // Set other steps
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
    // Set height of section
    setSectionHeight();
  }
  init();
  window.onresize = setSectionHeight;
}
