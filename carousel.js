// Carousel Slider
const scrollContainer = document.querySelector('.scroll-container');

scrollContainer.addEventListener('mouseenter', () => {
  scrollContainer.style.animationPlayState = 'paused';
});

scrollContainer.addEventListener('mouseleave', () => {
  scrollContainer.style.animationPlayState = 'running';
});