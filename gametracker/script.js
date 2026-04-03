const games = [
{
title: "Minecraft",
genre: "Sandbox",
rating: 5,
image: "images/minecraft.jpg"
},
{
title: "The Legend of Zelda",
genre: "Adventure",
rating: 5,
image: "images/zelda.jpg"
},
{
title: "Tekken 8",
genre: "Fighting",
rating: 4,
image: "images/tekken.jpg"
}
];

function displayGames(gameList) {
const container = document.querySelector("#games");
if (!container) return;

container.innerHTML = "";

gameList.forEach(game => {
const card = document.createElement("div");
card.classList.add("card");

card.innerHTML = `
<h3>${game.title}</h3>
<img src="${game.image}" alt="${game.title}">
<p>Genre: ${game.genre}</p>
<p>Rating: ${game.rating}</p>
`;

container.appendChild(card);
});
}

function filterGames() {
const select = document.querySelector("#genre");
if (!select) return;

const genre = select.value;

if (genre === "all") {
displayGames(games);
} else {
const filtered = games.filter(game => game.genre === genre);
displayGames(filtered);
}
}

document.addEventListener("DOMContentLoaded", () => {
displayGames(games);

const select = document.querySelector("#genre");
if (select) {
select.addEventListener("change", filterGames);
}
});
