//@ts-check
import { gsap } from "gsap";
export function animateLoader(isMobile) {
  // // Makes sure the loader is only played once
  function handleLoader() {
    // Get saved data from sessionStorage
    let loaderSeen = sessionStorage.getItem("loaderSeen");
    /** @type {HTMLElement} */
    // @ts-ignore
    let loadingWrapper = document.querySelector("[animate='loader']");
    if (!loadingWrapper) return;

    // If the loader has not been seen show it, otherwise hide it
    if (!loaderSeen) {
      // display the loading-wrapper
      // loadingWrapper.style.display = "flex";
      animateLoadingImages();
      sessionStorage.setItem("loaderSeen", "true");
    } else {
      // hide the loading-wrapper
      loadingWrapper.style.display = "none";
    }
  }

  handleLoader();
  function animateLoadingImages() {
    // Get all images
    const images = Array.from(document.querySelectorAll("[animate='loader'] img"));
    const wrapper = document.querySelector("[animate='load-image-wrapper']");
    const logoMask = document.querySelector("[animate='logo-mask']");

    if (!images || !wrapper || !logoMask) return;

    let delay = 0.1;

    gsap
      .timeline()
      .to(logoMask, {
        delay: 1,
        width: isMobile ? "19vw" : "6.7rem",
        ease: "power3.inOut",
        duration: 0.5,
      })
      .to(
        wrapper,
        {
          opacity: 1,
          duration: 0.3,
          //   ease: "elastic.out(1,0.3)",
          ease: "power3.out",
        },
        0
      )
      .fromTo(
        "[animate='loader'] img",
        {
          scale: 0,
        },
        {
          scale: 1,
          duration: 0.3,
          ease: "power3.out",
        },
        0
      )
      .to(images[6], {
        delay: delay,
        display: "none",
        duration: 0.1,
      })
      .to(images[5], {
        delay: delay,
        display: "none",
        duration: 0.1,
      })
      .to(images[4], {
        delay: delay,
        display: "none",
        duration: 0.1,
      })
      .to(images[3], {
        delay: delay,
        display: "none",
        duration: 0.1,
      })
      .to(images[2], {
        delay: delay,
        display: "none",
        duration: 0.1,
      })
      .to(images[1], {
        delay: delay,
        display: "none",
        duration: 0.1,
      })
      .to(images[0], {
        delay: delay,
        display: "none",
        duration: 0.1,
      })
      .to("[animate='loader']", {
        yPercent: -100,
        ease: "power2.in",
        duration: 0.4,
      })
      .set("[animate='loader']", {
        display: "none",
      });
  }
}
