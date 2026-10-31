const menuButton = document.querySelector('.mobile-menu');
const nav = document.getElementById('mainnav');
menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  nav.classList.toggle('is-open', open);
});
nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('is-open');
  menuButton?.setAttribute('aria-expanded','false');
}));
document.getElementById('year').textContent = String(new Date().getFullYear());
// To add your photo: upload assets/profile.jpg. It appears automatically.
const photo = new Image();
photo.onload = () => {
  const box = document.getElementById('portrait-box');
  if (box) { box.replaceWith(photo); photo.alt='Portrait of Vaibhav Nainwal'; }
};
photo.src = 'assets/profile.jpg';
