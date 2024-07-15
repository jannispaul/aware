// @ts-check

import { cmsNest } from "./utils/cmsNest.js";
import { createToolTip } from "./utils/createToolTip.js";
import { getScreenSize } from "./utils/getScreenSize.js";
import { onAllPages } from "./utils/onAllPages.js";
import { tabsListCount } from "./utils/tabsListCount.js";
import { updateModalCopy } from "./utils/updateModalCopy.js";
import { animateImageScale } from "./animations/animateImageScale.js";

function init() {
  animateImageScale();
  onAllPages();
  cmsNest();
  tabsListCount();
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
