// Character Object
const character = {
  name: "Swamp Beast Diplomat",
  class: "Monster",
  level: 1,
  health: 100,

  attacked() {
    if (this.health > 0) {
      this.health -= 20;

      if (this.health <= 0) {
        this.health = 0;
        alert(this.name + " has died!");
      }
    }
    updateDisplay();
  },

  levelUp() {
    this.level += 1;
    updateDisplay();
  }
};

// Update HTML
function updateDisplay() {
  document.getElementById("name").textContent = character.name;
  document.getElementById("class").textContent = character.class;
  document.getElementById("level").textContent = character.level;
  document.getElementById("health").textContent = character.health;
}

// Button Events
document.getElementById("attackBtn").addEventListener("click", function() {
  character.attacked();
});

document.getElementById("levelBtn").addEventListener("click", function() {
  character.levelUp();
});

// Initial Load
updateDisplay();
