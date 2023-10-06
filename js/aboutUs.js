// @ts-check

import { moveImgInText } from "./utils/moveImgInText.js";
import { onAllPages } from "./utils/onAllPages.js";
import { createSlider } from "./utils/createSlider.js";

function init() {
  onAllPages();
  moveImgInText();
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
