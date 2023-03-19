// Smooth scrolling
const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 500,
  speedAsDuration: true
});

// Toggle mobile menu
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('nav-menu--visible');
});
