// @ts-check

import { animateImageScale } from "./animations/animateImageScale.js";
import { onAllPages } from "./utils/onAllPages.js";

function init() {
  animateImageScale();
  onAllPages();
}

if (document.readyState == "loading") {
  // Still loading, wait for the event
  document.addEventListener("DOMContentLoaded", init);
} else {
  // DOM is ready!
  init();
}
