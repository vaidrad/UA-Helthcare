document.addEventListener('DOMContentLoaded', () => {
  const burgerBtn = document.querySelector('#burger-menu');
  const navMenu = document.querySelector('header nav.navigation');
  let isNavMenuOpen = false;

  burgerBtn.addEventListener('click', () => {
    navMenu.classList.toggle('closed');
     isNavMenuOpen = !navMenu.classList.contains('closed');
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth < 769 && isNavMenuOpen) {
      isNavMenuOpen = false;
      navMenu.classList.add('closed');
    }
  });
});


