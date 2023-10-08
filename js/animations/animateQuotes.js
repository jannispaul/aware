import { gsap } from "gsap";

export function animateQuotes(params) {
  // Get required elements

  // Quoty copy container
  const quoteContainer = document.querySelector("[data-element='quote-container']");
  // Quote image list
  const quoteList = document.querySelector("[data-element='quote-list']");
  let reset = false;
  // All quotes
  let quoteListItems = Array.from(document.querySelectorAll("[data-element='quote']"));
  const height = "20rem";
  const width = "12rem";
  const originalItemCount = quoteListItems.length;
  const count = 3;

  // Duplicate quotes for seamless looping
  function cloneNodes() {
    [...quoteListItems].reverse().forEach((item) => {
      let cloneNode = item.cloneNode(true);
      quoteList.prepend(cloneNode);
      gsap.set(cloneNode, {
        opacity: 0,
        autoAlpha: 1,
      });
    });
  }
  cloneNodes();
  cloneNodes();
  // Update quoteListItems to include cloned nodes
  quoteListItems = Array.from(document.querySelectorAll("[data-element='quote']"));

  // Helper function to get distance to parents right side
  function getDistanceToParentRight(element) {
    var elementRect = element.getBoundingClientRect();
    var parentRect = element.parentElement.getBoundingClientRect();
    var distance = parentRect.right - elementRect.right;
    return distance;
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
    // console.log(index, quoteListItems.length, quoteListItems.length / 2);

    // Select all items after the clicked one
    // let itemsAfter = quoteListItems.slice(clickIndex + 1);
    // Select all items before and including the clicked one
    let itemsBefore = quoteListItems.slice(0, clickIndex + 1);
    // Select the clones to be faded in
    // let itemClones = quoteListItems.slice((clickIndex - originalItemCount, quoteListItems.length / originalItemCount));

    fadeOutItems(clickIndex, 1);
    fadeInClones(clickIndex, 1);
    shiftItems(clickIndex, 1);

    // Resets rows
    // If item of cloned row got clicked, reset rows and index
    if (clickIndex < quoteListItems.length - originalItemCount) {
      //   reset = true;
      console.log(clickIndex, reset);
      gsap.delayedCall(2, () => {
        resetAll();
        // fadeOutItems(clickIndex, 0);
        // fadeInClones(clickIndex, 0);
        clickIndex = clickIndex + quoteListItems.length / count;

        shiftItems(clickIndex, 0);
        // fadeInClones(clickIndex, 0);
      });
    }
  }
  function resetAll() {
    quoteListItems.forEach((item, index) => {
      gsap.set(item, {
        clearProps: "scale,width,height,transform,visibility",
        opacity: index < quoteListItems.length - originalItemCount ? 0 : 1,
      });
    });
  }
  // function resetPosition(clickIndex) {
  //   quoteListItems.forEach((item, index) => {
  //     // Reset
  //     gsap.set(item, {
  //       translateX: "0px",
  //       //   opacity: 1,
  //       yPercent: 0,
  //       autoAlpha: 1,
  //       width: width,
  //       height: height,

  //       //   transition: none,
  //       clearProps: "transform, scale, width, height",
  //     });
  //     // console.log(item, gsap.getProperty(item, "translateX"));
  //     // item.style.tranform = "translate(0px, 0px)";
  //   });
  // }

  function fadeInClones(clickIndex, duration) {
    // Select the clones to be faded in
    let itemClones = quoteListItems.slice(clickIndex + 1 - originalItemCount, quoteListItems.length - originalItemCount);
    console.log(clickIndex - originalItemCount, quoteListItems.length - originalItemCount, itemClones);
    // Fade in the clone on the left side
    gsap.delayedCall(0.5, () => {
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
      gsap
        .timeline()
        .to(item, {
          translateX: "+=" + 200,
          opacity: 0,
          duration: duration,
          ease: "power1.inOut",
          autoAlpha: 0,
        })
        .to(item, {});
    });
  }
  // gsap.getProperty(item, "translateX")

  function shiftItems(clickIndex, duration) {
    const itemsBefore = quoteListItems.slice(0, clickIndex + 1);
    let transformdistance = getDistanceToParentRight(quoteListItems[clickIndex]);
    // If the animation should run without transition, then dont delay it
    let delay = duration === 0 ? 0 : 0.5;
    // Animate the items to their new position
    gsap.delayedCall(delay, () => {
      itemsBefore.forEach((item, index) => {
        gsap
          .timeline()
          .to(item, {
            translateX: reset ? 0 : "+=" + transformdistance,
            duration: duration,
            ease: "power1.inOut",
          })
          .to(
            item,
            {
              width: index === itemsBefore.length - 1 ? "20rem" : "12rem",
              height: index === itemsBefore.length - 1 ? "33rem" : "16.5rem",
              duration: duration,
              scale: 1,
              ease: "power1.inOut",
            },
            0
          );
      });
      reset = false;
    });
  }

  function init() {
    shiftItems(quoteListItems.length - 1, 0);
  }
  init();

  // Event listener
  document.addEventListener("click", (event) => {
    // Early return if its not a quote
    if (!event.target.closest("[data-element='quote']")) return;
    handleClick(event.target.closest("[data-element='quote']"));
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
