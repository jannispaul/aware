// @ts-check

import { cmsNest } from "./utils/cmsNest.js";
import { onAllPages } from "./utils/onAllPages.js";

function init() {
  onAllPages();
  cmsNest();
}

if (document.readyState == "loading") {
  // Still loading, wait for the event
  document.addEventListener("DOMContentLoaded", init);
} else {
  // DOM is ready!
  init();
}
