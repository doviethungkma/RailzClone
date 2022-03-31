//toggle menu

const menu = document.querySelector(".navbar__menu");
const menuToggle = document.querySelector(".navbar__menu-toggle");
const closeBtn = document.querySelector(".navbar__close-btn");

console.log(menu);

menuToggle.addEventListener("click", () => {
  // menu.style.display = "block";
  menu.classList.toggle("navbar__menu--active");
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove("navbar__menu--active");
})

// closeBtn.addEventListener("click", () => {
//   menu.style.display = "none";
// });
