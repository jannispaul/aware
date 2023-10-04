// @ts-check
import { moveImgInText } from "./utils/moveImgInText.js";
import { animateHalfs } from "./animations/animateHalfs.js";
import { animateFooter } from "./animations/animateFooter.js";
import { animateScaleUp } from "./animations/animateScaleUp.js";
import { animateNav } from "./animations/animateNav.js";

function init() {
  animateNav();
  moveImgInText();
  animateHalfs();
  animateScaleUp();
  animateFooter();
}

if (document.readyState == "loading") {
  // Still loading, wait for the event
  document.addEventListener("DOMContentLoaded", init);
} else {
  // DOM is ready!
  init();
}
