const closeBtn = document.querySelector('.modal-btn');
const modalWindow = document.querySelector('.backdrop');
closeBtn.addEventListener('click', event => {
  if (modalWindow.classList.contains('is-open')) {
    modalWindow.classList.remove('is-open');
  }
});
console.log('log');
