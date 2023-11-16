// @ts-check
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function animateNav() {
  gsap.registerPlugin(ScrollTrigger);
  // Nav button
  const navButton = document.querySelector(".is-nav.is-outline-light");
  // Weglot lang switch prop style
  /**
   * @type HTMLElement | null
   */
  let weglotElement = document.querySelector(".country-selector");

  // Get color prop for weglot text color
  function getColorProp() {
    // Get the root element
    if (!weglotElement) return;
    // Get the styles (properties and values) for the root
    let weglotStyle = getComputedStyle(weglotElement);
    // Get style prop
    return weglotStyle.getPropertyValue("--lang-switch-color");
  }
  let originalWeglotColor = getColorProp();

  // Set color prop for weglot
  function setColorProp(color) {
    if (!weglotElement || !color) return;
    weglotElement.style.setProperty("--lang-switch-color", color);
  }

  // Turn nav button dark if menu is open
  function toggleNavButton() {
    // console.log("toggle button", menuIsOpen, navButton);
    if (menuIsOpen) {
      navButton?.classList.remove("is-outline-light");
      navButton?.classList.add("is-outline");
      setColorProp("#000");
    } else {
      // Change button to light button
      navButton?.classList.remove("is-outline");
      navButton?.classList.add("is-outline-light");
      setColorProp(originalWeglotColor);
    }
  }
  // End of Weglot switcher setup

  // Animation 1
  // On Scroll down hide nav
  const hideNavAnimation = gsap
    .from("[animate='nav']", {
      yPercent: -100,
      paused: true,
      duration: 0.3,
    })
    .progress(1);

  ScrollTrigger.create({
    start: "top top",
    end: 99999,
    onUpdate: (self) => {
      self.direction === -1 ? hideNavAnimation.play() : hideNavAnimation.reverse();
    },
  });
  // End of Animation 1

  // Animation 2
  // On scroll turn background white, box shadow, and turn element black
  const scrollAnimation = gsap.timeline({ paused: true });
  let isScrolledToTop = true;

  scrollAnimation
    .to("[animate='nav']", {
      duration: 0.4,
      background: "white",
      color: "#000",
      boxShadow: "0px 1px 10px 0px rgba(0, 0, 0, 0.04)",
    })
    .to(
      ".navbar_logo-link",
      {
        color: "#08031B",
      },
      0
    )
    .to(
      ".menu-icon_line-top, .menu-icon_line-bottom",
      {
        background: "#08031B",
      },
      0
    );

  // When page scrolled show scroll animation and reverse when up
  ScrollTrigger.create({
    trigger: "body",
    start: "top top",
    end: "+=200",
    // markers: true,
    scrub: 1,
    onUpdate: (self) => {
      if (self.progress < 0.3) return;
      //   console.log(self.direction);
      if (self.direction === 1) {
        isScrolledToTop = false;
        scrollAnimation.play();
        // Change button to dark button
        navButton?.classList.remove("is-outline-light");
        navButton?.classList.add("is-outline");
        setColorProp("#000");
      } else {
        isScrolledToTop = true;
        scrollAnimation.reverse();
        // Change button to ligth button
        navButton?.classList.remove("is-outline");
        navButton?.classList.add("is-outline-light");
        setColorProp(originalWeglotColor);
      }
    },
  });

  // End of animation 2

  // Animation 3
  // On open: remove border radius
  // On close: add radius

  const borderRadiusAnimation = gsap.to(".navbar_component", {
    borderRadius: 0,
    duration: 0.1,
    // paused: true,
  });

  //   Mutation observer variables
  let menuIsOpen = false;
  const targetNode = document.querySelector(".w-nav-button");
  const config = { attributes: true, childList: false, subtree: false };

  // Mutation observer whaching the menu opening
  const callback = function (mutationsList, observer) {
    for (let i = 0; i < mutationsList.length; i++) {
      if (mutationsList[i].type === "attributes") {
        // console.log(targetNode);
        menuIsOpen = mutationsList[i].target.classList.contains("w--open");
        // If the menu is open
        if (menuIsOpen) {
          scrollAnimation.play();
          borderRadiusAnimation.play();
          toggleNavButton();

          // If the menu is open and scrolledToTop
        } else if (!menuIsOpen && isScrolledToTop) {
          toggleNavButton();
          scrollAnimation.reverse();
          gsap.delayedCall(0.3, () => borderRadiusAnimation.reverse());

          // Otherwise
        } else {
          gsap.delayedCall(0.3, () => borderRadiusAnimation.reverse());
        }
      }
    }
  };

  if (!targetNode) return;
  const observer = new MutationObserver(callback);
  observer.observe(targetNode, config);
}
