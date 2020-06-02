const menu = document.getElementById("menu");

const menuItems = menu.querySelector(".menu-items");

menu.addEventListener("click", menuToggler);

function menuToggler() {
  menuItems.toggleAttribute("hidden");
}

/* Proyectos */
const proyectos = document.querySelectorAll(".proyectos-list li");

proyectos.forEach(function(el) {
  el.addEventListener("mouseenter", i => i.target.classList.add("imagen"));
  el.addEventListener("mouseleave", i => i.target.classList.remove("imagen"));
});
