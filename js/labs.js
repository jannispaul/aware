// @ts-check
import { animateBanner } from "./animations/animateBanner.js";
import { animateFooter } from "./animations/animateFooter.js";

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
