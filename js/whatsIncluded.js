// @ts-check

import { cmsNest } from "./utils/cmsNest.js";
import { createToolTip } from "./utils/createToolTip.js";
import { getScreenSize } from "./utils/getScreenSize.js";
import { onAllPages } from "./utils/onAllPages.js";
import { updateModalCopy } from "./utils/updateModalCopy.js";

function init() {
  onAllPages();
  cmsNest();
  updateModalCopy();

  // Only on desktop
  let isMobile = getScreenSize();
  if (isMobile) return;
  createToolTip();
}

if (document.readyState == "loading") {
  // Still loading, wait for the event
  document.addEventListener("DOMContentLoaded", init);
} else {
  // DOM is ready!
  init();
}
