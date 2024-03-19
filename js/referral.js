// @ts-check
import { onAllPages } from "./utils/onAllPages.js";
import { animateQuotes } from "./animations/animateQuotes.js";
import { animateXmasHow } from "./animations/animateXmasHow.js";
import { getScreenSize } from "./utils/getScreenSize.js";
import { animateQuotesMobile } from "./animations/animateQuotesMobile.js";
import { animateHow } from "./animations/animateHow.js";
import { cmsNest } from "./utils/cmsNest.js";
import { createToolTip } from "./utils/createToolTip.js";
import { tabsListCount } from "./utils/tabsListCount.js";

function init() {
  let isMobile = getScreenSize();
  onAllPages();
  cmsNest();
  tabsListCount();

  // Only run on mobile
  if (isMobile) {
    animateQuotesMobile();
  }
  // Only run on desktop
  if (!isMobile) {
    animateQuotes();
    animateXmasHow();
    animateHow();
    createToolTip();
  }
}

if (document.readyState == "loading") {
  // Still loading, wait for the event
  document.addEventListener("DOMContentLoaded", init);
} else {
  // DOM is ready!
  init();
}
