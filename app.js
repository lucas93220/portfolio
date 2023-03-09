const card = document.querySelector('.card');
const image = document.querySelector('.card img');

card.addEventListener('click', () => {
  card.classList.add('animate');
  setTimeout(() => {
    card.classList.remove('animate');
    image.classList.add('animate');
  }, 1000);
});