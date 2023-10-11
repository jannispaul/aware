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

  gsap.set(headingOne,{
      opacity:0,
      yPercent: 100
  })
    gsap.set(headingTwo,{
        opacity:0,
        yPercent: 100
    })
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
        }
      })
    //   .to(bornImage, { yPercent: 0} )
      .to(headingOne, { opacity: 1, yPercent: 0} )
      .to(headingOne, { opacity: 0, yPercent: -100} )
      .fromTo(headingTwo, { opacity: 0, yPercent: 0, }, { opacity: 1, yPercent: -100, }, "25%")
      .to(headingTwo, { opacity: 1})


//     let st = ScrollTrigger.create({
//         trigger: bornSection,
//         start: "top center",
//         end: "+=1000",
//         pin: true,
//         markers: true
//       });

//   // console.log(scaleImage);
//   gsap
//   .from(headingOne, {
//     opacity: 0,
//     scrollTrigger: st

//     // scrollTrigger: {
//     //   start: "top bottom",
//     //   end: "bottom bottom +=500",
//     //   trigger: bornSection,
//     //   scrub: 0,
//     // },
//   })
//   gsap.to(headingTwo,{
//     opacity:1, 
//     scrollTrigger: {
//         start: "top bottom",
//         end: "top middle",
//         trigger: bornSection,
//         scrub: 1,
//         }
//     });
//   gsap.to(headingOne,{
//     opacity:0, 
//     scrollTrigger: {
//         start: "top bottom",
//         end: "top top",
//         trigger: bornSection,
//         scrub: 0,
//         }
//     });
}
