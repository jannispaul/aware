import { animateNav } from "../animations/animateNav.js";
import { animateMenu } from "../animations/animateMenu.js";

export function onAllPages(params) {
  animateMenu();
  animateNav();
}
