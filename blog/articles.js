// Array of book articles
const articles = [
  {
    title: "The Goose Girl",
    author: "Shannon Hale",
    genre: "Fantasy",
    year: 2005,
    image: "https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg",
    description:
      "Princess Ani learns to speak with animals and discovers her strength after being betrayed on her journey to a new kingdom."
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    year: 1937,
    image: "https://upload.wikimedia.org/wikipedia/en/4/4a/TheHobbit_FirstEdition.jpg",
    description:
      "Bilbo Baggins is swept into an epic quest to reclaim a lost dwarf kingdom guarded by a dragon."
  }
];

// Select the container
const container = document.getElementById("blog-container");

// Loop through articles and create HTML
articles.forEach(article => {
  const articleElement = document.createElement("article");
  articleElement.classList.add("book-card");

  articleElement.innerHTML = `
    <div class="book-details">
      <p><strong>Genre:</strong> ${article.genre}</p>
      <p><strong>Author:</strong> ${article.author}</p>
      <p><strong>Published:</strong> ${article.year}</p>
    </div>

    <div class="book-content">
      <h2>${article.title}</h2>
      <img src="${article.image}" alt="Cover of ${article.title}">
      <p>${article.description}</p>
    </div>
  `;

  container.appendChild(articleElement);
});
