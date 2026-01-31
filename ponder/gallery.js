const gallery = document.querySelector('.gallery');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

// Open modal when image is clicked
gallery.addEventListener('click', openModal);

function openModal(e) {
  // Make sure an image was clicked
  if (e.target.tagName === 'IMG') {
    // Replace -sm with -lg for high resolution image
    const largeImage = e.target.src.replace('-sm', '-lg');

    modalImage.src = largeImage;
    modalImage.alt = e.target.alt;

    modal.showModal();
  }
}

// Close modal on button click
closeButton.addEventListener('click', () => {
  modal.close();
});

// Close modal if clicking outside the image
modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.close();
  }
});

// Close modal with Escape key
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modal.open) {
    modal.close();
  }
});
