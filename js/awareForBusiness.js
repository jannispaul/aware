// @ts-check

import { animateBusinessHeader } from "./animations/animateBusinessHeader.js";
import { onAllPages } from "./utils/onAllPages.js";

function init() {
  onAllPages();
  animateBusinessHeader();
}

if (document.readyState == "loading") {
  // Still loading, wait for the event
  document.addEventListener("DOMContentLoaded", init);
} else {
  // DOM is ready!
  init();
}
