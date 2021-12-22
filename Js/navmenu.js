const openMenu = document.querySelector('.button');
const closeMenu = document.querySelectorAll('.hide');
const slideMenu = document.querySelector('#slidebar');

openMenu.addEventListener('click', () => {
  slideMenu.classList.add('appear');
});

closeMenu.forEach((element) => {
  element.addEventListener('click', () => slideMenu.classList.remove('appear'));
});