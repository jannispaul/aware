// @ts-check
import { moveImgInText } from "./utils/moveImgInText.js";
import { animateHalfs } from "./animations/animateHalfs.js";
import { animateFooter } from "./animations/animateFooter.js";

function init() {
  moveImgInText();
  animateHalfs();
  animateFooter();
}

if (document.readyState == "loading") {
  // Still loading, wait for the event
  document.addEventListener("DOMContentLoaded", init);
} else {
  // DOM is ready!
  init();
}
