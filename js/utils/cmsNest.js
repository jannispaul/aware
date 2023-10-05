export function cmsNest() {
  // Set [data-element='nest-target'] on target div
  // Set [data-element='nest-source'] on source list
  // Set [data-category='XXX'] on target div
  // Set [data-category='XXX'] on source list item
  // Optional
  // Set [data-element='total-count'] on element for total count
  // Set [data-element='position-count']" on element in primary list for nested item count

  // Get all nest targets in parent collection list
  const targetLists = document.querySelectorAll("[data-element='nest-target']");
  // Get the list to be the source
  const sourceList = document.querySelector("[data-element='nest-source']");
  const countIndicator = document.querySelector("[data-element='total-count']");

  // Get all items that have data-category set
  // data-category needs to be set on cms items
  const items = sourceList.querySelectorAll("[data-category]");
  const numberOfPositions = items.length;
  if (countIndicator) countIndicator.innerText = numberOfPositions;

  // Append items to category
  items.forEach((item) => {
    let category = item.dataset.category;
    let target = document.querySelector(`[data-category='${category}']`);
    if (target.dataset.element === "nest-target") {
      target.appendChild(item);
    }
  });

  // Count items in category and if there are no positions, hide the category
  targetLists.forEach((list) => {
    let counter = list.parentNode.parentNode.querySelector("[data-element='position-count']");
    if (!counter) return;
    let positionCount = list.children.length;
    if (positionCount > 0) {
      // console.log(list.children.length);
      counter.innerText = list.children.length;
    } else {
      counter.remove();
    }
  });

  sourceList.parentNode.remove();
}
