import { animateNav } from "../animations/animateNav.js";
import { animateMenu } from "../animations/animateMenu.js";
import { getScreenSize } from "./getScreenSize.js";
import { animateLoader } from "../animations/animateLoader.js";
import { animateNavButton } from "../animations/animateNavButton.js";
export function onAllPages(params) {
  let isMobile = getScreenSize();
  animateLoader(isMobile);
  animateNav();

  // Only run on desktop
  if (isMobile) return;
  animateNavButton();
  animateMenu(isMobile);
}
