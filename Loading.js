let percentage = 0;
const percentageText = document.getElementById('percentage');
let preloader = document.getElementById('preloader');

const loading = setInterval(() => {
  percentage++;
  percentageText.textContent = percentage + ' %';

  if (percentage >= 100) {
    clearInterval(loading);
    preloader.classList.remove('show');
  }
}, 90);