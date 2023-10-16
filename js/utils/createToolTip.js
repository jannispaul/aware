// Function to create tooltips for biomarkers
export function createToolTip(params) {
  // Remove Modal attributes
  const infoButtons = document.querySelectorAll('[fs-modal-element="open-2"]');
  infoButtons.forEach((button) => {
    button.removeAttribute("fs-modal-element");
    button.setAttribute("fs-modal-element", "tooltip");
  });
  let currentTooltip;
  let modalsDisabled = false;

  // Helper function to disable finsweet modals for biomarkers
  function disableModals() {
    window.fsAttributes = window.fsAttributes || [];
    window.fsAttributes.modal.destroy();
    window.fsAttributes.modal.init();
  }

  // Function to clone node and render in correct spot
  function displayToolTip(node) {
    // Disbale finsweet modal if its not disabled yet
    if (!modalsDisabled) disableModals();

    // Get the position of the node relative to the viewport
    const rect = node.getBoundingClientRect();

    let clone = node.cloneNode(true);
    clone.style.display = "block";
    clone.style.transform = "translateY(0)";
    // Calculate the offset of the node
    const offsetX = rect.left + window.scrollX;
    const offsetY = rect.top + window.scrollY + 4;
    // Set the node's position to be fixed at the same spot
    clone.style.left = offsetX + "px";
    clone.style.top = offsetY + "px";

    document.body.appendChild(clone);
    currentTooltip = clone;
  }
  // Show on hover
  function showTooltip(event) {
    let target = event.target;
    let tooltip = target.parentNode.querySelector('[data-element="tooltip"]');
    if (!tooltip) return;
    tooltip.style.display = "block";
    displayToolTip(tooltip);
    tooltip.style.display = "none";
  }
  // Remove on hover
  function hideTooltip(event) {
    currentTooltip?.remove();
  }

  infoButtons.forEach((button) => button.addEventListener("mouseenter", showTooltip));
  infoButtons.forEach((button) => button.addEventListener("mouseleave", hideTooltip));
}
