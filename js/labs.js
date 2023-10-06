// @ts-check
import { animateBanner } from "./animations/animateBanner.js";
import { animateFooter } from "./animations/animateFooter.js";
import { onAllPages } from "./utils/onAllPages.js";

function init() {
  onAllPages();
  animateBanner();
  animateFooter();
}

if (document.readyState == "loading") {
  // Still loading, wait for the event
  document.addEventListener("DOMContentLoaded", init);
} else {
  // DOM is ready!
  init();
}
