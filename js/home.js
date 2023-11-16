// @ts-check
import { moveImgInText } from "./utils/moveImgInText.js";
import { onAllPages } from "./utils/onAllPages.js";
import { animateHalfs } from "./animations/animateHalfs.js";
import { animateCardToFull } from "./animations/animateCardToFull.js";
import { animateImageScale } from "./animations/animateImageScale.js";
import { animateQuotes } from "./animations/animateQuotes.js";
import { animateHow } from "./animations/animateHow.js";
import { getScreenSize } from "./utils/getScreenSize.js";
import { animateQuotesMobile } from "./animations/animateQuotesMobile.js";

function init() {
  let isMobile = getScreenSize();
  onAllPages();
  moveImgInText();
  animateImageScale();
  animateCardToFull();

  // Only run on mobile
  if (isMobile) {
    animateQuotesMobile();
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
