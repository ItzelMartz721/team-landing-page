const sr = ScrollReveal({
  distance: '100px',
  duration: 5000,
  easing: 'ease',
  reset: false
});

sr.reveal('.hero__tag', {
  delay: 800,
  origin: 'top'
});

sr.reveal('.hero__title', {
  delay: 1000,
  origin: 'bottom'
});

sr.reveal('.hero__subtitle', {
  delay: 1400,
  origin: 'bottom'
});

sr.reveal('.hero__description', {
  delay: 1600,
  origin: 'bottom'
});

sr.reveal('.hero__button-wrapper', {
  delay: 1800,
  origin: 'bottom'
});
