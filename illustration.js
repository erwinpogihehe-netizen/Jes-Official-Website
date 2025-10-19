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

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".illustration img").forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "block";
    lightboxImg.src = img.src;
  });
});
closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.illustration');
  const items = Array.from(container.children);
  for (let i = items.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [items[i], items[j]] = [items[j], items[i]];
  }
  items.forEach(item => container.appendChild(item));
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