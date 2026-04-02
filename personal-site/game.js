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

// 1. Add this NEW listener to stop the animation when you let go of the keys
document.addEventListener("keyup", () => {
    player.classList.remove("walking");
});

// 2. REPLACE your current keydown listener with this one:
document.addEventListener("keydown", (e) => {

    // Start the walking animation if an arrow key is pressed
    if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)) {
        player.classList.add("walking");
    }

    if (e.key === "ArrowUp") y -= speed;
    if (e.key === "ArrowDown") y += speed;
    
    if (e.key === "ArrowLeft") {
        x -= speed;
        player.style.transform = "scaleX(-1)"; // Flips Dallas to face left
    }
    if (e.key === "ArrowRight") {
        x += speed;
        player.style.transform = "scaleX(1)";  // Resets Dallas to face right
    }

    // --- YOUR EXISTING BOUNDARY LOGIC ---
    const maxX = game.clientWidth - player.clientWidth;
    const maxY = game.clientHeight - player.clientHeight;

    if (x < 0) x = 0;
    if (y < 0) y = 0;
    if (x > maxX) x = maxX;
    if (y > maxY) y = maxY;

    movePlayer();

    if (e.key === " ") checkInteraction();
});

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
