// @ts-check
import { moveImgInText } from "./utils/moveImgInText.js";
import { onAllPages } from "./utils/onAllPages.js";
import { animateHalfs } from "./animations/animateHalfs.js";
import { animateFooter } from "./animations/animateFooter.js";
import { animateScaleUp } from "./animations/animateScaleUp.js";
import { animateImageScale } from "./animations/animateImageScale.js";
import { animateQuotes } from "./animations/animateQuotes.js";
import { animateHow } from "./animations/animateHow.js";

function init() {
  onAllPages();
  moveImgInText();
  // Only run on desktop
  if (window.matchMedia("(min-width: 768px)").matches) {
    animateHalfs();
    animateQuotes();
    animateHow();
  }
  animateScaleUp();
  animateImageScale();
  animateFooter();
}

if (document.readyState == "loading") {
  // Still loading, wait for the event
  document.addEventListener("DOMContentLoaded", init);
} else {
  // DOM is ready!
  init();
}
