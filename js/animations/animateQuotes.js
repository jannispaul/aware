import { gsap } from "gsap";

export function animateQuotes(params) {
  const currentImageElement = document.querySelector("[data-element='current-image']");
  const quoteContainer = document.querySelector("[data-element='quote-container']");
  const quoteList = document.querySelector("[data-element='quote-list']").childNodes;

  //   let currentItem;
  //   currentItem.querySelector("[data-element='quote-body']");

  function handleClick(event) {
    console.log(event.currentTarget);
    gsap.to(event.currentTarget, {
      scale: 1.05,
      opacity: "100%",
      duration: 0.3,
      ease: "power2.out",
    });
    let index = Array.from(node.parentElement.children).indexOf(node);
    for (index; index < array.length; index++) {
      gsap.to(quoteList[index], {
        opacity: "0%",
        xPercent: "50%",
        duration: 1,
      });
    }
    let quotes = document.querySelectorAll("[data-element='quote']");
    quotes.forEach((quote, index) => {
      if (quote === event.currentTarget) {
      }
    });
  }
  quoteList.forEach((item) => {
    item.addEventListener("click", handleClick);
  });
}
