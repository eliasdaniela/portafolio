const menu = document.getElementById("menu");

const menuItems = menu.querySelector(".menu-items");

menu.addEventListener("click", menuToggler);

function menuToggler() {
  menuItems.toggleAttribute("hidden");
}
