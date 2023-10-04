// @ts-check
// Display images inline in Text
export function moveImgInText() {
  console.log("Hi");
  // Create spans with data-element='span-wrapper'
  let spans = document.querySelectorAll("[data-element='span-wrapper']");

  // Create images with data-element='span-item'
  let spanItems = document.querySelectorAll("[data-element='span-item']");

  // Move images with same index into spans
  spans.forEach((span, index) => span.append(spanItems[index]));
}
