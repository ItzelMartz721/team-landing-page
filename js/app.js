const sr = ScrollReveal({
  distance: '100px',
  duration: 3000,
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