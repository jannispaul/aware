// @ts-check
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function animateQuotesMobile(params) {
  gsap.registerPlugin(ScrollTrigger);

  let quotes = Array.from(document.querySelectorAll("[data-element='quote']"));

  gsap.set("[data-element='quote-body']", { opacity: 0 });
  gsap.set("[data-element='quote'] img", { scale: 0.75, transformOrigin: "left" });

  // Observer with options

  const options = {
    root: null, //--> Or scroll container. if null relative to viewport
    rootMargin: "0px 0px 0px 00px", // can also take percent
    threshold: 0.5, // 0 = first pixel, 0.5 = center, 1= last pixel is visible
  };

  let isLeaving = false;
  let direction = "left";
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.boundingClientRect.left < 0) {
        direction = "left";
      } else {
        direction = "right";
      }
      if (entry.isIntersecting) {
        // Coming in from right side
        if (direction === "right") {
          fadeInFromRight(entry.target);
        } else {
          // Coming in from left side
          fadeInFromLeft(entry.target);
        }

        // we are ENTERING the "capturing frame". Set the flag.
        isLeaving = true;
        // Do something with entering entry
      } else if (isLeaving) {
        // entry.target.classList.remove("active");
        if (direction === "left") {
          // Leaving to left side
          fadeOutToLeft(entry.target);
        } else {
          // Leaving to right side
          // fadeInFromRight(entry.target, "reverse");
          fadeOutToRight(entry.target);
        }

        // we are EXITING the "capturing frame"
        isLeaving = false;
        // Do something with exiting entry
      }
    });
  }, options);

  function fadeInFromRight(quote) {
    console.log("fadeinfromright", quote);
    let copy = quote.querySelector("[data-element='quote-body']");
    let img = quote.querySelector("img");

    gsap
      .timeline({ ease: "power1.inOut" })
      .fromTo(
        copy,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.5,
        }
      )
      .fromTo(
        img,
        {
          scale: 0.75,
          transformOrigin: "left",
        },
        {
          scale: 1,
          duration: 0.5,
          transformOrigin: "left",
        },
        0
      );
  }
  function fadeOutToRight(quote) {
    console.log("fadeOuttoRight", quote);
    let copy = quote.querySelector("[data-element='quote-body']");
    let img = quote.querySelector("img");

    gsap
      .timeline({ ease: "power1.inOut" })
      .fromTo(
        copy,
        {
          opacity: 1,
        },
        {
          opacity: 0,
          duration: 1,
        }
      )
      .fromTo(
        img,
        {
          scale: 1,
          transformOrigin: "left",
        },
        {
          scale: 0.75,
          duration: 0.5,
          transformOrigin: "left",
        },
        "0"
      );
  }

  function fadeInFromLeft(quote) {
    console.log("fadeInFromLeft", quote);
    let copy = quote.querySelector("[data-element='quote-body']");
    let img = quote.querySelector("img");
    // console.log(quote, copy, img);
    gsap
      .timeline({ ease: "power1.inOut" })
      .fromTo(
        copy,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 1,
        }
      )
      .fromTo(
        img,
        {
          scale: 0.75,
          duration: 1,
          transformOrigin: "right",
        },
        {
          scale: 1,
          duration: 0.5,
          transformOrigin: "right",
        },
        0
      );
  }

  function fadeOutToLeft(quote) {
    console.log("fadeouttoLeft", quote);
    let copy = quote.querySelector("[data-element='quote-body']");
    let img = quote.querySelector("img");
    // console.log(quote, copy, img);
    gsap
      .timeline({ ease: "power1.inOut" })
      .fromTo(
        copy,
        {
          opacity: 1,
          duration: 1,
        },
        {
          opacity: 0,
          duration: 1,
        },
        0
      )
      .fromTo(
        img,
        {
          scale: 1,
          duration: 1,
        },
        {
          scale: 0.75,
          duration: 0.5,
          transformOrigin: "right",
        },
        "<"
      );
  }

  quotes.forEach((quote) => observer.observe(quote));
}
