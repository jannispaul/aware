// @ts-check
import { animateNav } from "../animations/animateNav.js";
import { animateMenu } from "../animations/animateMenu.js";
import { getScreenSize } from "./getScreenSize.js";
import { animateLoader } from "../animations/animateLoader.js";
import { animateNavButton } from "../animations/animateNavButton.js";
import { animateFadeIn } from "../animations/animateFadeIn.js";
import { setMobileDownloadLinks } from "./setMobileDownloadLinks.js";

export function onAllPages() {
  // On all devices
  let isMobile = getScreenSize();
  animateLoader(isMobile);
  animateNav();
  animateFadeIn();

  // Only on mobile
  if (isMobile) {
    setMobileDownloadLinks();
  }

  // Only on desktop
  if (isMobile) return;
  animateNavButton();
  animateMenu(isMobile);
}
