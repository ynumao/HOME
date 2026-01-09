document.addEventListener('DOMContentLoaded', () => {
  console.log('Launcher Site Initialized');
  
  const cards = document.querySelectorAll('.card-link:not(.placeholder)');
  
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      // Logic for hover sounds or additional micro-interactions could go here
    });
  });
});
