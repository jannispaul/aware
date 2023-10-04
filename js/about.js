// @ts-check

import { moveImgInText } from "./utils/moveImgInText.js";

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
