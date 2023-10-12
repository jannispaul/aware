// Helper function to check if menu is open
export function isMenuOpen(params) {
  let menuIsOpen = false;
  // Get webflow menu button
  const menuButton = document.querySelector(".w-nav-button");
  // Check if open class is applied
  menuIsOpen = menuButton.classList.contains("w--open");
  // Return value
  return menuIsOpen;
}
