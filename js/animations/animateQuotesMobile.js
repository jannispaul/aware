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
  slider?.events.on("indexChanged", updateCenterItemClass);
}
