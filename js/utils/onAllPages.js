import { animateNav } from "../animations/animateNav.js";
import { animateMenu } from "../animations/animateMenu.js";
import { getScreenSize } from "./getScreenSize.js";

export function onAllPages(params) {
  let isMobile = getScreenSize()
  animateNav();
  if (isMobile) return;
  animateMenu(isMobile);
}
