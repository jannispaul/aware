// @ts-check
import { onAllPages } from "./utils/onAllPages.js";
import { getScreenSize } from "./utils/getScreenSize.js";
import { animateHow } from "./animations/animateHow.js";

function init() {
  let isMobile = getScreenSize();
  onAllPages();

  // Only run on mobile
  if (isMobile) {
  }
  // Only run on desktop
  if (!isMobile) {
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
