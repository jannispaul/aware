// @ts-check
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function animateCardToFull() {
  gsap.registerPlugin(ScrollTrigger);

  // Get elements
  let scaleTrigger = document.querySelector("[animate='scale-trigger']");
  let scaleImage = scaleTrigger?.querySelector("[animate='scale']");
  let content = scaleTrigger?.querySelector("[animate='content']");
  //@ts-ignore
  let containerWidth = document.querySelector(".container-xlarge")?.offsetWidth;

  // let containerWidth = gsap.getProperty(containerXLarge, "width");
  // @ts-ignore
  let scaleFactor = containerWidth ? containerWidth / window.innerWidth : 0.85;
  // console.log(scaleTrigger, scaleImage, containerWidth);

  if (!scaleTrigger || !scaleImage) return;
  let duration = 3;

  // Scale section down at the start
  gsap.set(scaleImage, {
    scale: scaleFactor,
    borderRadius: "1.25rem",
  });

  // Main scale up and down animation
  let animation = gsap
    .timeline({
      paused: true,
      scrollTrigger: {
        start: "top 80%",
        end: "bottom 90%",
        trigger: scaleTrigger,
        scrub: 1,
        // markers: true,
      },
    })
    .to(
      scaleImage,
      {
        scale: 1,
        borderRadius: "0rem",
        duration: duration,
        ease: "power1.inOut",
      },
      "<2"
    )
    .to(
      scaleImage,
      {
        scale: 1,
        borderRadius: "0rem",
      },
      "<6"
    )
    .to(
      scaleImage,
      {
        scale: scaleFactor,
        borderRadius: "1.25rem",
        duration: duration,
        ease: "power1.inOut",
      },
      "<"
    );

  // If there is content in the center add a fade in animation
  if (content) {
    gsap.set(content, {
      opacity: 0,
    });
    let fadeIn = gsap.timeline().to(
      content,
      {
        opacity: 1,
        duration: duration,
      },
      "<"
    );
    animation.add(fadeIn, duration * 1.7);
  }
}
