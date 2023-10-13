// @ts-check
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function animateBorn() {
  gsap.registerPlugin(ScrollTrigger);
  let bornSection = document.querySelector("[animate='born-section']");
  let bornInner = document.querySelector("[animate='born-inner']");
  //   let bornImage = document.querySelector("[animate='born-image']");
  let headingOne = document.querySelector("[animate='heading-1']");
  let headingTwo = document.querySelector("[animate='heading-2']");

  gsap.set(headingOne, {
    opacity: 0,
    yPercent: 100,
  });
  gsap.set(headingTwo, {
    opacity: 0,
    yPercent: 100,
  });
  // gsap.set(bornImage,{
  //     yPercent: 10
  // })

  gsap.registerPlugin(ScrollTrigger);

  let tl = gsap
    .timeline({
      scrollTrigger: {
        trigger: bornSection,
        start: "top top",
        scrub: true,
        pin: bornInner,
        end: "bottom",
        //   markers: true
      },
    })
    //   .to(bornImage, { yPercent: 0} )
    .to(headingOne, { opacity: 1, yPercent: 0 })
    .to(headingOne, { opacity: 0, yPercent: -100 })
    .fromTo(headingTwo, { opacity: 0, yPercent: 0 }, { opacity: 1, yPercent: -100 }, "25%")
    .to(headingTwo, { opacity: 1 });
}
