const themeSelector = document.querySelector("#theme");
const logo = document.querySelector("#logo");

themeSelector.addEventListener("change", changeTheme);

function changeTheme() {
  if (themeSelector.value === "dark") {
    document.body.classList.add("dark");
    logo.src = "images/logo-white.png";
  } else {
    document.body.classList.remove("dark");
    logo.src = "images/logo.png";
  }
}
