// @ts-check
import { animateBanner } from "./animateBanner.js";
import { animateFooter } from "./animateFooter.js";

function init() {
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
