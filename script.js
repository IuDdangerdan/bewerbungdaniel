'use strict';
const toggle = document.querySelector('.photo-toggle');
const portrait = document.querySelector('#portrait');
const playfulPortrait = new Image();
playfulPortrait.src = 'assets/portrait-fun.jpg';
toggle.addEventListener('click', () => {
  const playful = toggle.getAttribute('aria-pressed') !== 'true';
  toggle.setAttribute('aria-pressed', String(playful));
  toggle.setAttribute('aria-label', playful ? 'Das normale Bewerbungsfoto anzeigen' : 'Das etwas andere Bewerbungsfoto anzeigen');
  toggle.innerHTML = `<span aria-hidden="true">↻</span> ${playful ? 'Okay, jetzt seriös.' : 'Ganz seriös. Fast.'}`;
  portrait.src = playful ? 'assets/portrait-fun.jpg' : 'assets/portrait.jpg';
  portrait.alt = playful ? 'Daniel mit lachender Pose und beiden Armen in der Luft am Kanal' : 'Daniel an einem Kanal, mit Sonnenbrille und heller Jeansjacke';
});
const privacy = document.querySelector('#privacy-dialog');
document.querySelector('[data-open-privacy]').addEventListener('click', () => privacy.showModal());
privacy.querySelector('.dialog-close').addEventListener('click', () => privacy.close());
privacy.addEventListener('click', event => {
  if (event.target === privacy) {
    const rect = privacy.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) privacy.close();
  }
});
document.querySelector('#year').textContent = new Date().getFullYear();
