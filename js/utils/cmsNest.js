export function cmsNest() {
  // Set [data-element='nest-target'] on target div
  // Set [data-element='nest-source'] on source list
  // Set [data-category='XXX'] on target div
  // Set [data-category='XXX'] on source list item
  // Optional
  // Set [data-identifier='XXX'] for mulitple lists should be set on source and target items (and total count)
  // Set [data-element='total-count'] on element for total count
  // Set [data-element='position-count']" on element in primary list for nested item count

  // Get all nest targets in parent collection list
  const targetItems = Array.from(document.querySelectorAll("[data-element='nest-target']"));
  const identifierItems = Array.from(document.querySelectorAll("[data-identifier]"));
  const identifiers = [...new Set(identifierItems.map((item) => item.dataset.identifier))];

  // Get the list to be the source
  const sourceLists = document.querySelectorAll("[data-element='nest-source']");
  // const countIndicators = document.querySelectorAll("[data-element='total-count']");

  // If there are mulitple lists to nest use identifiers
  if (identifiers.length > 1) {
    // Go through all sources and get the the corressponding targets
    sourceLists.forEach((source) => {
      let test = targetItems[1].closest(`[data-identifier=${source.dataset.identifier}]`);
      let filteredTargets = targetItems.filter((target) => target.closest(`[data-identifier=${source.dataset.identifier}]`));
      // Run nest List
      nestList(source, filteredTargets);
    });
  } else {
    nestList(sourceLists[0], Array.from(targetItems));
  }

  function nestList(source, targetList) {
    // Get all items that have data-category set
    // data-category needs to be set on cms items
    const items = source.querySelectorAll("[data-category]");
    const numberOfPositions = items.length;
    // if (countIndicators) countIndicators[0].innerText = numberOfPositions;

    // Append items to category
    items.forEach((item) => {
      let category = item.dataset.category;
      // let target = targetList.querySelector(`[data-category='${category}']`);
      let target = targetList.filter((target) => target.dataset.category === category)[0];
      if (target?.dataset.element === "nest-target") {
        target.appendChild(item);
      }
    });

    // Count items in category and if there are no positions, hide the category
    targetList.forEach((list) => {
      let counter = list.parentNode.parentNode.querySelector("[data-element='position-count']");
      if (!counter) return;
      let positionCount = list.children.length;
      if (positionCount > 0) {
        counter.innerText = list.children.length;
      } else {
        counter.remove();
      }
    });
  }
  sourceLists.forEach((list) => list.parentNode.remove());
}
