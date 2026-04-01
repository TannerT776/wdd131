const player = document.getElementById("player")

let x = 280
let y = 180

document.addEventListener("keydown", (e) => {

if(e.key === "ArrowUp") y -= 10
if(e.key === "ArrowDown") y += 10
if(e.key === "ArrowLeft") x -= 10
if(e.key === "ArrowRight") x += 10

player.style.left = x + "px"
player.style.top = y + "px"

})

document.getElementById("computer")
.addEventListener("click", showProjects)

document.getElementById("cabinet")
.addEventListener("click", showResume)

document.getElementById("recipes")
.addEventListener("click", showRecipes)

document.getElementById("tracker")
.addEventListener("click", showBugs)
