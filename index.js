const navBottom = document.querySelector('.nav-bottom');
const menuSwitcher = document.querySelector('#check-menu');
let i = 0;
menuSwitcher.addEventListener('click', () => {
  if (i == 0) {
    navBottom.style.height = '350px';
    i = 1;
  } else {
    navBottom.style.height = '0';
    i = 0;
  }
})