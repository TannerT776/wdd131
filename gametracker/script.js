const games = [
{
title: "Payday 2",
genre: "Action",
rating: 5,
image: "images/payday2.jpg"
},
{
title: "Skyrim",
genre: "RPG",
rating: 5,
image: "images/skyrim.jpg"
},
{
title: "Minecraft",
genre: "RPG",
rating: 4,
image: "images/minecraft.jpg"
}
];

function displayGames(gameList) {
const container = document.querySelector("#games");
if(!container) return;

container.innerHTML = "";

gameList.forEach(game => {
container.innerHTML += `
<div class="card">
<h3>${game.title}</h3>
<img src="${game.image}" alt="${game.title}">
<p>Genre: ${game.genre}</p>
<p>Rating: ${game.rating}</p>
</div>
`;
});
}

function filterGames() {
const genre = document.querySelector("#genre").value;

if (genre === "all") {
displayGames(games);
} else {
const filtered = games.filter(game => game.genre === genre);
displayGames(filtered);
}
}

document.querySelector("#genre")?.addEventListener("change", filterGames);

displayGames(games);
