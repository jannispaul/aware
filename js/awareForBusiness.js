// @ts-check

import { onAllPages } from "./utils/onAllPages.js";

function init() {
  onAllPages();
}

if (document.readyState == "loading") {
  // Still loading, wait for the event
  document.addEventListener("DOMContentLoaded", init);
} else {
  // DOM is ready!
  init();
}
