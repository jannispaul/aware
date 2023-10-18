// @ts-check
import { createSlider } from "../utils/createSlider";

export function animateQuotesMobile(params) {
  let sliderOptions = {
    container: "[data-element='quote-list']",
    items: 2,
    gutter: 12,
    center: true,

    autoplay: false,
    loop: true,
    controls: false,
    nav: false,
  };
  let slider = createSlider(sliderOptions);
  // In order hide copy on side items and scale down image, centered class is added to center item
  // Styles for center class in embed of component
  function updateCenterItemClass() {
    let activeItems = document.querySelectorAll(".tns-slide-active");

    activeItems[0]?.classList.remove("center");
    activeItems[1]?.classList.add("center");
    activeItems[2]?.classList.remove("center");
  }
  // Add center class on load once
  updateCenterItemClass();
  // Update classes when index changes
  // slider?.events.on("indexChanged", updateCenterItemClass);

  // Intersection observer to watch
  // Get an array of elements to observe
  const elementsToObserve = document.querySelectorAll("[data-element='quote']");

  // Observer options
  const options = {
    // root: null,<-- root can not be null for rootMargin to work
    rootMargin: "100% 0% 100% 0%", // Only fire on horizontal since the vertical margins are set 100% outside the viewport
    threshold: [0, 0.9], // Trigger when the entire element enters (0) or exits (1) the viewport vertically
  };

  const observerCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const intersectionRatio = entry.intersectionRatio;
        // Check if the element is fully visible horizontally
        if (intersectionRatio >= 0.9) {
          // Add class when element enters from either left or right
          entry.target.classList.add("center");
        } else {
          // Remove class when element exits to the side
          entry.target.classList.remove("center");
        }
      } else {
        // Remove class when element exits to the side
        entry.target.classList.remove("center");
      }
    });
  };

  // Create Intersection Observer instance
  const observer = new IntersectionObserver(observerCallback, options);

  // Observe each element in the array
  elementsToObserve.forEach((element) => {
    observer.observe(element);
  });
}
