// @ts-check
import { animateHalfs } from "./animateHalfs.js";
import { animateFooter } from "./animateFooter.js";
import { moveImgInText } from "./moveImgInText.js";

function init() {
  moveImgInText;
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
