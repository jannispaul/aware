import { gsap } from "gsap";
export function animateLoader(isMobile) {
  // Makes sure the loader is only played once
  function handleLoader() {
    // Get saved data from sessionStorage
    let loaderSeen = sessionStorage.getItem("loaderSeen");
    let loadingWrapper = document.querySelector("[animate='loader']");
    console.log(loadingWrapper);
    loaderSeen = false;

    //
    if (!loaderSeen) {
      // display the loading-wrapper
      loadingWrapper.style.display = "flex";
      animateLoadingImages();
      sessionStorage.setItem("loaderSeen", "true");
    } else {
      // hide the loading-wrapper
      loadingWrapper.style.visibility = "hidden";
      loadingWrapper.style.display = "none";
    }
  }
  handleLoader();
  function animateLoadingImages() {
    // Get all images
    const images = Array.from(document.querySelectorAll("[animate='loader'] img"));
    const wrapper = document.querySelector("[animate='load-image-wrapper']");
    const logoMask = document.querySelector("[animate='logo-mask']");
    console.log(images);
    // Last images is shown on top, therefore reverse array first
    // images.reverse().forEach((image, index) => {
    //   console.log(image);
    //   setTimeout(() => {
    //     image.style.display = "none";
    //   }, (index + 1) * 200);
    // });
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
