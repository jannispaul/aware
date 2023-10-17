// @ts-check
import { animateBanner } from "./animations/animateBanner.js";
// import { onAllPages } from "./utils/onAllPages.js";
import { animateCardToFull } from "./animations/animateCardToFull.js";
import { createSlider } from "./utils/createSlider.js";
import { animateImageScale } from "./animations/animateImageScale.js";

function init() {
  // onAllPages();
  animateBanner();
  animateCardToFull();
  animateImageScale();
  let sliderOptions = {
    container: ".team_cms-list",
    items: 3,
    slideBy: 1,
    autoplay: false,
    prevButton: ".team_slider-arrow.is-prev",
    nextButton: ".team_slider-arrow.is-next",
  };
  createSlider(sliderOptions);
}

if (document.readyState == "loading") {
  // Still loading, wait for the event
  document.addEventListener("DOMContentLoaded", init);
} else {
  // DOM is ready!
  init();
}
