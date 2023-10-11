import { animateNav } from "../animations/animateNav.js";
import { animateMenu } from "../animations/animateMenu.js";
import { getScreenSize } from "./getScreenSize.js";
import { animateLoader } from "../animations/animateLoader.js";

export function onAllPages(params) {
  let isMobile = getScreenSize();
  animateLoader(isMobile);
  animateNav();
  if (isMobile) return;
  animateMenu(isMobile);
}
