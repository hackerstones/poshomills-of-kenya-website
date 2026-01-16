const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');
const menuBtnIcon = menuBtn.querySelector('i');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  const isOpen = navLinks.classList.contains('open');
  menuBtnIcon.setAttribute(
    'class',
    isOpen ? 'ri-close-line' : 'ri-menu-3-line'
  );
});

// ScrollReveal config
const scrollRevealOption = {
  distance: '50px',
  origin: 'bottom',
  duration: 1000,
};

ScrollReveal().reveal('.header_container h1', {
  ...scrollRevealOption,
});

ScrollReveal().reveal('.header_content .section_description', {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal('.header_btns', {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal('.machines_card', {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal('.others_card', {
  ...scrollRevealOption,
  interval: 500,
});
