// @ts-check

import { cmsNest } from "./utils/cmsNest.js";

function init() {
  cmsNest();
}

if (document.readyState == "loading") {
  // Still loading, wait for the event
  document.addEventListener("DOMContentLoaded", init);
} else {
  // DOM is ready!
  init();
}
