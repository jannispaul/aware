// @ts-check
import { moveImgInText } from "./utils/moveImgInText.js";
import { onAllPages } from "./utils/onAllPages.js";
import { animateQuotes } from "./animations/animateQuotes.js";
import { animateXmasHow } from "./animations/animateXmasHow.js";
import { getScreenSize } from "./utils/getScreenSize.js";
import { animateQuotesMobile } from "./animations/animateQuotesMobile.js";

function init() {
  let isMobile = getScreenSize();
  onAllPages();
  moveImgInText();

  // Only run on mobile
  if (isMobile) {
    animateQuotesMobile();
  }
  // Only run on desktop
  if (!isMobile) {
    animateQuotes();
    animateXmasHow();
  }
}

if (document.readyState == "loading") {
  // Still loading, wait for the event
  document.addEventListener("DOMContentLoaded", init);
} else {
  // DOM is ready!
  init();
}
