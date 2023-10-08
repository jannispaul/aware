import { gsap } from "gsap";

export function animateQuotes(params) {
  // Get required elements

  // Quoty copy container
  const quoteContainer = document.querySelector("[data-element='quote-container']");
  // Quote image list
  const quoteList = document.querySelector("[data-element='quote-list']");
  quoteList.parentNode.style.border = "2px solid red";

  // All quotes
  let quoteListItems = Array.from(document.querySelectorAll("[data-element='quote']"));
  const height = "16.5rem";
  const width = "12rem";
  const largeWidth = "20rem";
  const largeHeight = "33rem";
  const originalItemCount = quoteListItems.length;
  const count = 3;

  // Duplicate quotes for seamless looping
  function cloneNodes() {
    [...quoteListItems].reverse().forEach((item) => {
      let cloneNode = item.cloneNode(true);
      quoteList.prepend(cloneNode);
      gsap.set(cloneNode, {
        opacity: 0,
        autoAlpha: 0,
      });
    });
  }
  cloneNodes();
  cloneNodes();
  // Update quoteListItems to include cloned nodes
  quoteListItems = Array.from(document.querySelectorAll("[data-element='quote']"));

  // Helper function to get distance to parents right side

  function calculateDistanceToAlignRight(node) {
    // Get the bounding rectangle of the node and its parent
    const nodeRect = node.getBoundingClientRect();
    const parentRect = node.parentNode.getBoundingClientRect();

    // Calculate the current translateX value from the transform property
    const transformMatrix = new DOMMatrix(window.getComputedStyle(node).transform);
    const currentTranslateX = transformMatrix.a;

    // Calculate the distance needed to align the right side of the node with its parent
    const scaleOffset = (node.offsetWidth - nodeRect.width) / 2;
    const distanceToMove = parentRect.right - nodeRect.right - currentTranslateX - scaleOffset;

    return distanceToMove;
  }

  function convertRemToPixels(rem) {
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
  }
  // On click run handler
  function handleClick(currentItem) {
    // Scale up the item that got clicked
    gsap.to(currentItem, {
      scale: 1.05,
      opacity: 1,
      duration: 0.3,
      ease: "power2.inOut",
    });

    // Get the index of the clicked item
    let clickIndex = Array.from(currentItem.parentElement.children).indexOf(currentItem);

    fadeOutItems(clickIndex, 1);
    fadeInClones(clickIndex, 1);
    shiftItems(clickIndex, 1);
    updateQuoteCopy(clickIndex);

    // Resets rows
    // If item of cloned row got clicked, reset rows and index
    if (clickIndex < quoteListItems.length - originalItemCount) {
      gsap.delayedCall(1.75, () => {
        clickIndex = clickIndex + quoteListItems.length / count;
        resetAll(clickIndex);
      });
    }
  }
  function resetAll(clickIndex) {
    quoteListItems.forEach((item, index) => {
      gsap.set(item, {
        clearProps: "transform,visibility,scale",
        width: index === clickIndex ? largeWidth : width,
        height: index === clickIndex ? largeHeight : height,
        opacity: index < quoteListItems.length - originalItemCount ? 0 : 1,
      });
    });

    fadeOutItems(clickIndex, 0);
    fadeInClones(clickIndex, 0);
    shiftItems(clickIndex, 0);
  }

  function fadeInClones(clickIndex, duration) {
    // Select the clones to be faded in
    let itemClones = quoteListItems.slice(clickIndex + 1 - originalItemCount, clickIndex);
    let delay = duration === 0 ? 0 : 0.5;

    // Fade in the clone on the left side
    gsap.delayedCall(delay, () => {
      //   if (itemClones.length === quoteListItems.length / 2) return;
      itemClones.forEach((item) => {
        gsap.to(item, {
          opacity: 1,
          duration: duration,
          ease: "power1.inOut",
          autoAlpha: 1,
        });
      });
    });
  }

  function fadeOutItems(clickIndex, duration) {
    const itemsAfter = quoteListItems.slice(clickIndex + 1);
    // All items after the item get moved to the right
    itemsAfter.forEach((item) => {
      //   console.log("fading out", item, clickIndex);
      gsap.to(item, {
        translateX: "+=" + 200,
        opacity: 0,
        duration: duration,
        ease: "power1.inOut",
        autoAlpha: 0,
      });
    });
  }

  function shiftItems(clickIndex, duration) {
    const itemsBefore = quoteListItems.slice(0, clickIndex + 1);
    // let transformdistance = getDistanceToParentRight(quoteListItems[clickIndex]);
    let transformdistance = calculateDistanceToAlignRight(quoteListItems[clickIndex]);

    // duration === 0 ? transformdistance : transformdistance;
    // let correctedDistance = duration === 0 ? transformdistance : transformdistance - convertRemToPixels(parseFloat(largeWidth) - parseFloat(width));
    console.log("transform", transformdistance, "sizeOffset", convertRemToPixels(parseFloat(largeWidth) - parseFloat(width)));
    // If the animation should run without transition, then dont delay it
    let delay = duration === 0 ? 0 : 0.5;
    // Animate the items to their new position
    gsap.delayedCall(delay, () => {
      itemsBefore.forEach((item, index) => {
        gsap
          .timeline()
          .to(item, {
            translateX: "+=" + transformdistance,
            duration: duration,
            ease: "power1.inOut",
          })
          .to(
            item,
            {
              width: index === itemsBefore.length - 1 ? largeWidth : width,
              height: index === itemsBefore.length - 1 ? largeHeight : height,
              duration: duration,
              scale: 1,
              ease: "power1.inOut",
            },
            0
          );
      });
    });
  }

  function updateQuoteCopy(clickIndex) {
    // Fade copy out to the right
    gsap.to(quoteContainer, {
      xPercent: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power1.in",
    });

    gsap.delayedCall(1, () => {
      // Update the copy
      const copyWrapper = quoteListItems[clickIndex].querySelector("[data-element='quote-body']");
      quoteContainer.replaceChildren(...copyWrapper.cloneNode(true).children);

      // Fade copy in from the left
      gsap.fromTo(
        quoteContainer,
        {
          xPercent: -50,
          opacity: 0,
        },
        {
          xPercent: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power1.out",
        }
      );
    });
  }

  function init() {
    shiftItems(quoteListItems.length - 1, 0);
  }
  init();

  function handleMouseEnter(hoveredItem) {
    // prevent active item from scaling
    gsap.timeline().to(hoveredItem, {
      scale: 0.9,
      opacity: 0.8,
      ease: "power2.inOut",
      duration: 0.5,
    });
  }
  function handleMouseLeave(hoveredItem) {
    // prevent active item from scaling
    gsap.timeline().to(hoveredItem, {
      scale: 1,
      opacity: 1,
      ease: "power2.inOut",
      duration: 0.5,
    });
  }
  // Event listeners
  document.addEventListener("click", (event) => {
    // Early return if its not a quote
    if (!event.target.closest("[data-element='quote']")) return;
    handleClick(event.target.closest("[data-element='quote']"));
  });

  quoteListItems.forEach((item) => {
    item.addEventListener("mouseenter", (event) => {
      // Early return if its not a quote
      if (!event.target.closest("[data-element='quote']")) return;
      handleMouseEnter(event.target.closest("[data-element='quote']"));
    });
  });

  quoteListItems.forEach((item) => {
    item.addEventListener("mouseleave", (event) => {
      // Early return if its not a quote
      // if (!event.target.closest("[data-element='quote']")) return;
      handleMouseLeave(event.target.closest("[data-element='quote']"));
    });
  });
}
// /* Home community testimonial animation */
// .community_list > div:last-of-type{
// 	width: 20rem;
//   height: 33rem;
//   cursor: auto;
// }
// .community_list > div:not(:last-of-type):hover{
// 	transform: scale(0.9);
// 	opacity: 80%;
// }
