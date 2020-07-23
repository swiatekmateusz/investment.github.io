const barClose = document.querySelector('.bar__button');

if (barClose) {
  const bar = document.querySelector('.bar');
  const phone = document.querySelector('.phone');

  barClose.addEventListener('click', (e) => {
    bar.classList.toggle('hidden');
    phone.classList.toggle('down');
  });
}
