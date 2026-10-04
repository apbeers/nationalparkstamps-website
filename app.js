document.documentElement.style.setProperty('--scroll', window.scrollY);

let ticking = false;
function updateScroll() {
  document.documentElement.style.setProperty('--scroll', window.scrollY);
  document.querySelectorAll('.float-scroll').forEach((element) => {
    const offset = window.innerHeight / 2 - element.getBoundingClientRect().top;
    element.style.setProperty('--offset', Math.max(-350, Math.min(350, offset)));
  });
  ticking = false;
}
window.addEventListener('scroll', () => {
  if (!ticking) { requestAnimationFrame(updateScroll); ticking = true; }
}, { passive: true });
updateScroll();

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: .16 });
document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

const menuButton = document.querySelector('.menu-button');
const navLinks = document.querySelector('.nav-links');
if (menuButton && navLinks) {
  menuButton.addEventListener('click', () => {
    const open = navLinks.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', String(open));
  });
  navLinks.addEventListener('click', () => navLinks.classList.remove('is-open'));
}
document.querySelectorAll('[data-year]').forEach((element) => { element.textContent = new Date().getFullYear(); });
