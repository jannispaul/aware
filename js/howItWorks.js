// @ts-check

import { animateImageScale } from "./animations/animateImageScale.js";
import { onAllPages } from "./utils/onAllPages.js";
import { cmsNest } from "./utils/cmsNest.js";
import { tabsListCount } from "./utils/tabsListCount.js";
import { updateModalCopy } from "./utils/updateModalCopy.js";
import { createToolTip } from "./utils/createToolTip.js";
import { getScreenSize } from "./utils/getScreenSize.js";

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
