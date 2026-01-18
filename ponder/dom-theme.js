let isDark = false;

const button = document.querySelector("#themeButton");

button.addEventListener("click", () => {
  if (isDark) {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    isDark = false;
  } else {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    isDark = true;
  }
});
