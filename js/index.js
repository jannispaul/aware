// @ts-check
import { moveImgInText } from "./utils/moveImgInText.js";
import { onAllPages } from "./utils/onAllPages.js";
import { animateHalfs } from "./animations/animateHalfs.js";
import { animateFooter } from "./animations/animateFooter.js";
import { animateScaleUp } from "./animations/animateScaleUp.js";

import { animateQuotes } from "./animations/animateQuotes.js";
import { animateHow } from "./animations/animateHow.js";

function init() {
  onAllPages();
  moveImgInText();
  animateHalfs();
  animateScaleUp();
  animateQuotes();
  animateFooter();
  animateHow();
}

if (document.readyState == "loading") {
  // Still loading, wait for the event
  document.addEventListener("DOMContentLoaded", init);
} else {
  // DOM is ready!
  init();
}
