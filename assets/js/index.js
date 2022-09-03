const navbar = document.querySelector(".topnav");
const menuItems = document.querySelector(".menu-items");
const menuItem = document.querySelectorAll(".menu-item");

// main toggle
navbar.addEventListener("click", () => {
  toggle();
});

// toggle on item click if open
menuItem.forEach((item) => {
  item.addEventListener("click", () => {
    if (navbar.classList.contains("open")) {
      toggle();
    }
  });
});

function toggle() {
  navbar.classList.toggle("open");
  menuItems.classList.toggle("open");
}
