// --- 1. ELEMENTS ---
const player = document.getElementById("player");
const game = document.getElementById("game");
const miniPlayer = document.getElementById("mini-player");
const interaction = document.getElementById("interaction");

// --- 2. GAME STATE ---
let x = 320; // Starting X position
let y = 200; // Starting Y position
const speed = 10;

// Initialize the world on load
initObjects();
movePlayer();

// --- 3. MOVEMENT LOGIC ---

function movePlayer() {
    // Apply position to the sprite
    player.style.left = x + "px";
    player.style.top = y + "px";

    // --- DEPTH SORTING ---
    // Sets Dallas's Z-index based on his vertical position.
    // Higher Y (lower on screen) = Higher Z-index (in front).
    player.style.zIndex = Math.floor(y);

    // --- MINIMAP SYNC ---
    // 700px game / 140px map = ratio of 5
    miniPlayer.style.left = (x / 5) + "px";
    miniPlayer.style.top = (y / 5) + "px";

    checkNearby();
}

// Stop animation when keys are released
document.addEventListener("keyup", () => {
    player.classList.remove("walking");
});

document.addEventListener("keydown", (e) => {
    // Start walking animation for any movement key
    if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "w", "a", "s", "d"].includes(e.key)) {
        player.classList.add("walking");
    }

    // Directional Movement
    if (e.key === "ArrowUp" || e.key === "w") y -= speed;
    if (e.key === "ArrowDown" || e.key === "s") y += speed;
    
    if (e.key === "ArrowLeft" || e.key === "a") {
        x -= speed;
        player.style.transform = "scaleX(-1)"; // Face Left
    }
    if (e.key === "ArrowRight" || e.key === "d") {
        x += speed;
        player.style.transform = "scaleX(1)";  // Face Right
    }

    // --- 4. BOUNDARIES & COLLISION ---
    const maxX = game.clientWidth - player.clientWidth;
    const maxY = game.clientHeight - player.clientHeight;

    // Horizontal boundaries
    if (x < 0) x = 0;
    if (x > maxX) x = maxX;

    // Vertical boundaries (Preventing walking into the "Top Wall")
    if (y < 80) y = 80; 
    if (y > maxY) y = maxY;

    movePlayer();

    // Interaction trigger
    if (e.key === " ") checkInteraction();
});

// --- 5. INTERACTION & PROXIMITY ---

function isNear(el) {
    if (!el) return false;
    const playerRect = player.getBoundingClientRect();
    const objRect = el.getBoundingClientRect();

    // Proximity check with a 25px buffer
    return !(
        playerRect.right < objRect.left - 25 ||
        playerRect.left > objRect.right + 25 ||
        playerRect.bottom < objRect.top - 25 ||
        playerRect.top > objRect.bottom + 25
    );
}

function checkNearby() {
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

// --- 6. INITIALIZATION ---

function initObjects() {
    const objects = document.querySelectorAll('.object');
    objects.forEach(obj => {
        // Set object depth based on its CSS 'top' value
        const topValue = parseInt(window.getComputedStyle(obj).top);
        obj.style.zIndex = topValue;
    });
}
