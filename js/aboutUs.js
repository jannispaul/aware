// @ts-check

import { moveImgInText } from "./utils/moveImgInText.js";
import { onAllPages } from "./utils/onAllPages.js";
import { createSlider } from "./utils/createSlider.js";
import { animateImageScale } from "./animations/animateImageScale.js";
import { animateScaleUp } from "./animations/animateScaleUp.js";
import { animateBorn } from "./animations/animateBorn.js";
import { getScreenSize } from "./utils/getScreenSize.js";

function init() {
  let isMobile = getScreenSize();
  onAllPages();
  moveImgInText();
  animateScaleUp();
  animateImageScale();
  animateBorn();

  // Only on Dekstop
  if (!isMobile) {
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
}

if (document.readyState == "loading") {
  // Still loading, wait for the event
  document.addEventListener("DOMContentLoaded", init);
} else {
  // DOM is ready!
  init();
}
