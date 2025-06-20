const modal = document.querySelector('.backdrop');
const closeButton = document.querySelector('.modal-close');

closeButton.addEventListener('click', () => {
  modal.classList.remove('is-open');
});
