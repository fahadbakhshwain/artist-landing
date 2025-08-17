// Toggle overlay menu
const menuBtn = document.getElementById('menuBtn');
const overlay = document.getElementById('menuOverlay');
const closeBtn = document.getElementById('closeMenu');

function openMenu() {
  overlay.classList.add('open');
  overlay.setAttribute('aria-hidden', 'false');
  menuBtn.setAttribute('aria-expanded', 'true');
  document.body.classList.add('body-lock');
}
function closeMenu() {
  overlay.classList.remove('open');
  overlay.setAttribute('aria-hidden', 'true');
  menuBtn.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('body-lock');
}

menuBtn.addEventListener('click', openMenu);
document.getElementById('closeMenu').addEventListener('click', closeMenu);

overlay.addEventListener('click', (e) => {
  if (e.target === overlay) closeMenu();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && overlay.classList.contains('open')) closeMenu();
});

// Smooth scroll for menu links
overlay.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    e.preventDefault();
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (el) {
      closeMenu();
      setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80);
    }
  });
});
