const miniPlayer = document.getElementById("mini-player")

function movePlayer(){

player.style.left = x + "px"
player.style.top = y + "px"

// minimap position
const miniX = x / 5
const miniY = y / 5

miniPlayer.style.left = miniX + "px"
miniPlayer.style.top = miniY + "px"

}

document.getElementById("computer")
.addEventListener("click", showProjects)

document.getElementById("cabinet")
.addEventListener("click", showResume)

document.getElementById("recipes")
.addEventListener("click", showRecipes)

document.getElementById("tracker")
.addEventListener("click", showBugs)
