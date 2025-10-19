document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById('menuButton');
  const mobileNav = document.getElementById('mobileNav');

  if (menuButton && mobileNav) {
    menuButton.addEventListener('click', () => {
      mobileNav.classList.toggle('open');
      if (mobileNav.classList.contains('open')) {
        menuButton.textContent = "CLOSE";
      } else {
        menuButton.textContent = "MENU";
      }
    });
  }
});





document.addEventListener('DOMContentLoaded', () => {
  console.log('nav.js loaded');
  const logo = document.getElementById('logo');
  if (!logo) {
    console.error('Logo not found. Make sure <img id="logo"> exists.');
    return;
  }

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      logo.classList.add('visible');
    } else {
      logo.classList.remove('visible');
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const back = document.getElementById('backToTop');
  if (!back) {
    console.warn('backToTop element not found in DOM.');
    return;
  }

  const SHOW_AT = 200;

  function check() {
    if (window.scrollY > SHOW_AT) back.classList.add('show');
    else back.classList.remove('show');
  }

  check();

  window.addEventListener('scroll', check, { passive: true });

  back.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});