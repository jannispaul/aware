// Function to specifically count list items of aware addons when finsweet attributes already moved items to webflow tabs before count has happened
export function tabsListCount() {
  // Each tab has a count text block
  const counterBlocks = Array.from(document.querySelectorAll("[data-tabs='tab-count']"));
  if (!counterBlocks) return;
  // Loop through the blocks
  counterBlocks.forEach((el) => {
    // Get the category
    let category = el.getAttribute("data-category");

    // With combined data-attribues get the items in the same category with the addons identifier
    if (!category) return;
    let items = document.querySelector(`[data-category="${category}"][data-identifier="addons"][data-element="nest-target"]`).childNodes;

    // Update the list count
    let countElement = el.querySelector("[data-element='list-count']");
    if (!countElement) return;
    countElement.innerText = items.length > 1 ? items.length.toString() + " biomarkers" : items.length.toString() + " biomarker";
  });
}
