const title = document.querySelector("#title");
const message = document.querySelector(".message");
const button = document.querySelector("#changeBtn");

button.addEventListener("click", () => {
  title.textContent = "DOM Updated!";
  message.textContent = "You clicked the button.";
});
