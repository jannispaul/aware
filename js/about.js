// @ts-check

import { moveImgInText } from "./moveImgInText.js";

function init() {
  moveImgInText();
}

if (document.readyState == "loading") {
  // Still loading, wait for the event
  document.addEventListener("DOMContentLoaded", init);
} else {
  // DOM is ready!
  init();
}
