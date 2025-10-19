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
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log('Submit clicked');

    if (form.checkValidity()) {
      console.log('Valid — redirecting');
      window.location.href = 'thankyou.html';
    } else {
      console.log('Invalid');
      form.reportValidity();
    }
  });
});
