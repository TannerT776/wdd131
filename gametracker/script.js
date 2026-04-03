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
