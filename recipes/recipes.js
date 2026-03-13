const recipes = [
  {
    name: "Pancakes",
    rating: 4,
    tags: ["breakfast", "easy"],
    description: "Fluffy pancakes perfect for breakfast.",
    image: "https://images.unsplash.com/photo-1604908176997-4317c3c6c7d2"
  },
  {
    name: "Spaghetti",
    rating: 5,
    tags: ["dinner", "pasta"],
    description: "Classic spaghetti with tomato sauce.",
    image: "https://images.unsplash.com/photo-1605475129011-bc2b59a4e90e"
  },
  {
    name: "Garden Salad",
    rating: 3,
    tags: ["healthy", "vegetarian"],
    description: "Fresh vegetables with light dressing.",
    image: "https://images.unsplash.com/photo-1551218808-94e220e084d2"
  }
];

function recipeTemplate(recipe) {
  return `
  <article class="recipe-card">
    <img src="${recipe.image}" alt="${recipe.name}">
    <h2>${recipe.name}</h2>
    <p>${recipe.description}</p>
    <p class="rating">Rating: ${recipe.rating} ⭐</p>
    <p class="tags">${recipe.tags.join(", ")}</p>
  </article>
  `;
}

function renderRecipes(recipeList) {
  const container = document.getElementById("recipeContainer");

  container.innerHTML = recipeList
    .map(recipeTemplate)
    .join("");
}

function randomRecipe() {
  const randomIndex =
    Math.floor(Math.random() * recipes.length);

  renderRecipes([recipes[randomIndex]]);
}

function filterRecipes(searchTerm) {
  const filtered = recipes.filter(recipe =>
    recipe.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  renderRecipes(filtered);
}

document
  .getElementById("search")
  .addEventListener("input", (event) => {
    filterRecipes(event.target.value);
  });

randomRecipe();
