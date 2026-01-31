const menuButton = document.querySelector('#menu-button');
const nav = document.querySelector('nav');
const gallery = document.querySelector('.gallery');

/* MENU TOGGLE */
menuButton.addEventListener('click', () => {
  nav.classList.toggle('hide');
});

/* WINDOW RESIZE HANDLING */
window.addEventListener('resize', () => {
  if (window.innerWidth >= 700) {
    nav.classList.remove('hide');
  } else {
    nav.classList.add('hide');
  }
});

/* VIEWER TEMPLATE FUNCTION */
function viewerTemplate(src, alt) {
  return `
    <div class="viewer">
      <button class="close">X</button>
      <img src="${src}" alt="${alt}">
    </div>
  `;
}

/* GALLERY CLICK HANDLING */
gallery.addEventListener('click', (e) => {
  if (e.target.tagName === 'IMG') {
    const modalHTML = viewerTemplate(e.target.src, e.target.alt);
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    const closeButton = document.querySelector('.close');
    closeButton.addEventListener('click', closeViewer);
  }
});

/* CLOSE MODAL */
function closeViewer() {
  document.querySelector('.viewer').remove();
}
