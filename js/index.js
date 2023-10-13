// @ts-check
import { moveImgInText } from "./utils/moveImgInText.js";
import { onAllPages } from "./utils/onAllPages.js";
import { animateHalfs } from "./animations/animateHalfs.js";
// import { animateFooter } from "./animations/animateFooter.js";
import { animateScaleUp } from "./animations/animateScaleUp.js";
import { animateImageScale } from "./animations/animateImageScale.js";
import { animateQuotes } from "./animations/animateQuotes.js";
import { animateHow } from "./animations/animateHow.js";

import { headerVideoProgress } from "./utils/headerVideoProgress.js";
import { getScreenSize } from "./utils/getScreenSize.js";
import { animateHorizontalScroll } from "./animations/animateHorizontalScroll.js";

function init() {
  onAllPages();
  moveImgInText();
  headerVideoProgress();
  animateScaleUp();
  animateImageScale();
  // animateFooter();

  let isMobile = getScreenSize();
  // Only run on mobile
  if (isMobile) {
    animateHorizontalScroll();
  }
  // Only run on desktop
  if (!isMobile) {
    animateHalfs();
    animateQuotes();
    animateHow();
  }
}

if (document.readyState == "loading") {
  // Still loading, wait for the event
  document.addEventListener("DOMContentLoaded", init);
} else {
  // DOM is ready!
  init();
}
