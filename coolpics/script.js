const menuButton = document.querySelector("#menu-button");
const navMenu = document.querySelector("#nav-menu ul");

menuButton.addEventListener("click", () => {
  navMenu.style.display =
    navMenu.style.display === "block" ? "none" : "block";
});
