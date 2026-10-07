const header = document.querySelector('[data-header]');
const menuButton = document.querySelector('.menu-toggle');
const menuLabel = menuButton.querySelector('.sr-only');
const nav = document.querySelector('.main-nav');
const showMoreButton = document.querySelector('[data-show-more]');
const moreDates = document.querySelector('[data-more-dates]');

const updateHeader = () => header.classList.toggle('scrolled', window.scrollY > 18);
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  menuLabel.textContent = open ? 'Menü öffnen' : 'Menü schließen';
  nav.classList.toggle('open', !open);
  document.body.style.overflow = open ? '' : 'hidden';
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && nav.classList.contains('open')) {
    menuButton.setAttribute('aria-expanded', 'false');
    menuLabel.textContent = 'Menü öffnen';
    nav.classList.remove('open');
    document.body.style.overflow = '';
    menuButton.focus();
  }
});

nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  menuButton.setAttribute('aria-expanded', 'false');
  menuLabel.textContent = 'Menü öffnen';
  nav.classList.remove('open');
  document.body.style.overflow = '';
}));

if (showMoreButton && moreDates) {
  showMoreButton.addEventListener('click', () => {
    const willShow = moreDates.hidden;
    moreDates.hidden = !willShow;
    showMoreButton.innerHTML = willShow
      ? 'Termine einklappen <span aria-hidden="true">↑</span>'
      : 'Alle Termine ansehen <span aria-hidden="true">↓</span>';
  });
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
