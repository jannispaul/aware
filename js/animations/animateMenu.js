// @ts-check
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";

export function animateMenu(isMobile) {
  gsap.registerPlugin(Flip);

  // In order to change the image back to currently active item this variable gets set to true on mouseenter and false on mouseleave
  // If the variable is not true after a certain time the mouseleaveHandler shows the current item's image
  // This way flickering when hovering between the links is prevented
  let hasBeenUpdated = false;
  // Get all links from link-wrapper
  let linkWrapper = document.querySelector("[animate='link-wrapper']");
  let links = linkWrapper?.querySelectorAll("a");
  let dotElement = document.querySelector("[animate='dot']")
  // Get all images from image-wrapper
  let images = document.querySelector("[animate='image-wrapper']")?.childNodes;
  if (!links || !images) return;

  // Function to show the image of the currently active menu item
  function showCurrentImage(params) {
    links?.forEach((link, index) => {
      if (link.classList.contains("w--current")) {
        // Check if the image is not already shown
        // @ts-ignore 
        if(gsap.getProperty(images[index],"opacity")!== 1){
          // @ts-ignore
          gsap.to(images[index], { zIndex: 2, opacity: 1, duration: 0.3 });
        }
      } else {
        // @ts-ignore
        gsap.to(images[index], { zIndex: "0", duration: 0 });
        // @ts-ignore
        // Delay the fade out until the other image is stacked above and faded in
        let tl = gsap.to(images[index], { opacity: 0, duration: 0.0, paused: true });
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
    gsap.to(dotElement, {
      opacity: 1,
      duration: 0.5
    })
    hasBeenUpdated = true;
    links?.forEach((link, index) => {
      if (link === event.currentTarget) {
        // @ts-ignore
        gsap.to(images[index], { zIndex: "2", opacity: 1, duration: 0.3 });
      } else {
        // @ts-ignore
        gsap.to(images[index], { zIndex: "0", duration: 0 });
        // @ts-ignore
        // Delay the fade out until the other image is stacked above and faded in
        let tl = gsap.to(images[index], { opacity: 0, duration: 0, paused: true });
        gsap.delayedCall(0.3, () => {
          // @ts-ignore
          tl.play();
        });
      }
    });
  }
  // Function to animate the dot to a navbar link
  function updateDot(el) {
    if (isMobile) return;
    animateDotToElement(el)

    function animateDotToElement(el) {
      // let underline = el.querySelector(".nav_underline")
      let state = Flip.getState(dotElement);
      el.appendChild(dotElement);
      Flip.from(state, {
        duration: 0.4,
        opacity: 1,
        ease: "Circ.easeInOut"
      });
  }

  }
  function mouseEnterHandler(event){
    updateImage(event);
    updateDot(event.target)
  }

  // Handle the mouse leave
  function mouseLeaveHandler() {
    hasBeenUpdated = false;
    // If there is no other link hovered within 500ms then change back to currently active link's image
    setTimeout(() => {
      if(!hasBeenUpdated){
        showCurrentImage();
        setDotToCurrent();
      } 
    }, 500);
  }

  // Initialize dot to current menu item
  function setDotToCurrent(){
    if(!linkWrapper) return;
    let currentLink = linkWrapper.querySelector(".w--current") ;
    if (!currentLink) return
    updateDot(currentLink)
  }
  setDotToCurrent();

  // Add event mouse listeners
  links.forEach((link) => {
    link.addEventListener("mouseenter", mouseEnterHandler);
    link.addEventListener("mouseleave", mouseLeaveHandler);
  });
}
