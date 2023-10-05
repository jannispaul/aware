// @ts-check
import { gsap } from "gsap";

export function animateMenu() {
  // In order to change the image back to currently active item this variable gets set to true on mouseenter and false on mouseleave
  // If the variable is not true after a certain time the mouseleaveHandler shows the current item's image
  // This way flickering when hovering between the links is prevented
  let hasBeenUpdated = false;
  // Get all links from link-wrapper
  let links = document.querySelector("[animate='link-wrapper']")?.querySelectorAll("a");
  // Get all images from image-wrapper
  let images = document.querySelector("[animate='image-wrapper']")?.childNodes;
  if (!links || !images) return;
  // console.log(links, images);

  // Function to show the image of the currently active menu item
  function showCurrentImage(params) {
    links?.forEach((link, index) => {
      if (link.classList.contains("w--current")) {
        // @ts-ignore
        gsap.to(images[index], { zIndex: 2, opacity: "100%", duration: 0.3 });
      } else {
        // @ts-ignore
        gsap.to(images[index], { zIndex: "0", duration: 0 });
        // @ts-ignore
        // Delay the fade out until the other image is stacked above and faded in
        let tl = gsap.to(images[index], { opacity: "0%", duration: 0.0, paused: true });
        gsap.delayedCall(0.3, () => {
          // @ts-ignore
          tl.play();
        });
      }
    });
  }
  // Run once on page load
  showCurrentImage();

  // Function to show the image of the currently hovered menu icon
  function updateImage(event) {
    hasBeenUpdated = true;
    links?.forEach((link, index) => {
      if (link === event.currentTarget) {
        // @ts-ignore
        gsap.to(images[index], { zIndex: "2", opacity: "100%", duration: 0.3 });
      } else {
        // @ts-ignore
        gsap.to(images[index], { zIndex: "0", duration: 0 });
        // @ts-ignore
        // Delay the fade out until the other image is stacked above and faded in
        let tl = gsap.to(images[index], { opacity: "0%", duration: 0, paused: true });
        gsap.delayedCall(0.3, () => {
          // @ts-ignore
          tl.play();
        });
      }
    });
  }
  // Handle the mouse leave
  function mouseLeaveHandler() {
    hasBeenUpdated = false;
    // If there is no other link hovered within 500ms then change back to currently active link's image
    setTimeout(() => {
      !hasBeenUpdated && showCurrentImage();
    }, 500);
  }

  // Add event mouse listeners
  links.forEach((link) => {
    link.addEventListener("mouseenter", updateImage);
    link.addEventListener("mouseleave", mouseLeaveHandler);
  });
}
