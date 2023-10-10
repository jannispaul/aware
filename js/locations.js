// @ts-check
import { animateBanner } from "./animations/animateBanner.js";
import { animateFooter } from "./animations/animateFooter.js";
import { onAllPages } from "./utils/onAllPages.js";
import { animateScaleUp } from "./animations/animateScaleUp.js";
import { createSlider } from "./utils/createSlider.js";

function init() {
  onAllPages();
  animateBanner();
  animateFooter();
  animateScaleUp();
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
