const player = document.getElementById("player")
const game = document.getElementById("game")
const miniPlayer = document.getElementById("mini-player")
const interaction = document.getElementById("interaction")

let x = 320
let y = 200
const speed = 10

function movePlayer(){

player.style.left = x + "px"
player.style.top = y + "px"

miniPlayer.style.left = (x/5) + "px"
miniPlayer.style.top = (y/5) + "px"

checkNearby()

}

document.addEventListener("keydown", (e)=>{

if(e.key==="ArrowUp") y-=speed
if(e.key==="ArrowDown") y+=speed
if(e.key==="ArrowLeft") x-=speed
if(e.key==="ArrowRight") x+=speed

// boundaries
const maxX = game.clientWidth-player.clientWidth
const maxY = game.clientHeight-player.clientHeight

if(x<0)x=0
if(y<0)y=0
if(x>maxX)x=maxX
if(y>maxY)y=maxY

movePlayer()

if(e.key===" ") checkInteraction()

})

function isNear(el){

const playerRect=player.getBoundingClientRect()
const objRect=el.getBoundingClientRect()

return !(
playerRect.right < objRect.left-20 ||
playerRect.left > objRect.right+20 ||
playerRect.bottom < objRect.top-20 ||
playerRect.top > objRect.bottom+20
)

}

function checkNearby(){

if(
isNear(computer) ||
isNear(cabinet) ||
isNear(recipes) ||
isNear(tracker)
){
interaction.style.display="block"
}else{
interaction.style.display="none"
}

}

function checkInteraction(){

if(isNear(computer)) showProjects()
else if(isNear(cabinet)) showResume()
else if(isNear(recipes)) showRecipes()
else if(isNear(tracker)) showBugs()

}
