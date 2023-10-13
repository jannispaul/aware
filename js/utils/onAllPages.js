// @ts-check
import { animateNav } from "../animations/animateNav.js";
import { animateMenu } from "../animations/animateMenu.js";
import { getScreenSize } from "./getScreenSize.js";
import { animateLoader } from "../animations/animateLoader.js";
import { animateNavButton } from "../animations/animateNavButton.js";
import { animateFadeIn } from "../animations/animateFadeIn.js";

export function onAllPages(params) {
  let isMobile = getScreenSize();
  animateLoader(isMobile);
  animateNav();
  animateFadeIn();

  // Only run on desktop
  if (isMobile) return;
  animateNavButton();
  animateMenu(isMobile);
}
