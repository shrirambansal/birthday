const confettiBtn = document.getElementById('confetti-btn');

confettiBtn.addEventListener('click', () => {
  const confettiSettings = { target: 'my-canvas', max: 200 };
  const confetti = new ConfettiGenerator(confettiSettings);
  confetti.render();

  setTimeout(() => {
    confetti.clear();
  }, 5000); // Stop confetti after 5 seconds
});