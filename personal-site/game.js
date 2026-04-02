// Elements
const player = document.getElementById("player");
const game = document.getElementById("game");
const miniPlayer = document.getElementById("mini-player");
const interaction = document.getElementById("interaction");

// Game State
let x = 320;
let y = 200;
const speed = 10;

// Initialize Position
movePlayer();

function movePlayer() {
    player.style.left = x + "px";
    player.style.top = y + "px";

    // Minimap logic (Calculates ratio based on game vs minimap size)
    // 700px game / 140px map = 5. So x/5 is correct!
    miniPlayer.style.left = (x / 5) + "px";
    miniPlayer.style.top = (y / 5) + "px";

    checkNearby();
}

document.addEventListener("keyup", () => {
    player.classList.remove("walking");
});

document.addEventListener("keydown", (e) => {
    // Movement & Animation
    if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "w", "a", "s", "d"].includes(e.key)) {
        player.classList.add("walking");
    }

    if (e.key === "ArrowUp" || e.key === "w") y -= speed;
    if (e.key === "ArrowDown" || e.key === "s") y += speed;
    
    if (e.key === "ArrowLeft" || e.key === "a") {
        x -= speed;
        player.style.transform = "scaleX(-1)"; 
    }
    if (e.key === "ArrowRight" || e.key === "d") {
        x += speed;
        player.style.transform = "scaleX(1)"; 
    }

    // Boundaries
    const maxX = game.clientWidth - player.clientWidth;
    const maxY = game.clientHeight - player.clientHeight;

    if (x < 0) x = 0;
    if (y < 0) y = 0;
    if (x > maxX) x = maxX;
    if (y > maxY) y = maxY;

    movePlayer();

    if (e.key === " ") checkInteraction();
});

function isNear(el) {
    const playerRect = player.getBoundingClientRect();
    const objRect = el.getBoundingClientRect();

    // Small buffer to make interaction feel natural
    return !(
        playerRect.right < objRect.left - 25 ||
        playerRect.left > objRect.right + 25 ||
        playerRect.bottom < objRect.top - 25 ||
        playerRect.top > objRect.bottom + 25
    );
}

function checkNearby() {
    // Check all objects defined in your HTML
    const computer = document.getElementById("computer");
    const cabinet = document.getElementById("cabinet");
    const recipesObj = document.getElementById("recipes");
    const tracker = document.getElementById("tracker");

    if (isNear(computer) || isNear(cabinet) || isNear(recipesObj) || isNear(tracker)) {
        interaction.style.display = "block";
    } else {
        interaction.style.display = "none";
    }
}

function checkInteraction() {
    const computer = document.getElementById("computer");
    const cabinet = document.getElementById("cabinet");
    const recipesObj = document.getElementById("recipes");
    const tracker = document.getElementById("tracker");

    if (isNear(computer)) showProjects();
    else if (isNear(cabinet)) showResume();
    else if (isNear(recipesObj)) showRecipes();
    else if (isNear(tracker)) showBugs();
}
