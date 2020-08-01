const barClose = document.querySelector('.bar__button');

if (barClose) {
  const bar = document.querySelector('.bar');
  const phone = document.querySelector('.phone');

  barClose.addEventListener('click', (e) => {
    bar.classList.toggle('hidden');
    phone.classList.toggle('down');
  });
}

const residence = document.querySelector('.present__item__residence');

const park = document.querySelector('.present__item__park');


if (residence && park) {
  residence.addEventListener('mouseover', (e) => {
    residence.classList.add('present__item-hover');
    park.classList.add('present__item-nothover');
  });
  residence.addEventListener('mouseout', (e) => {
    residence.classList.remove('present__item-hover');
    park.classList.remove('present__item-nothover');
  });
  park.addEventListener('mouseover', (e) => {
    park.classList.add('present__item-hover');
    residence.classList.add('present__item-nothover');
  });
  park.addEventListener('mouseout', (e) => {
    park.classList.remove('present__item-hover');
    residence.classList.remove('present__item-nothover');
  });
  // items.forEach((item) => {
  //   item.addEventListener('mouseover', (e) => {
  //     item.classList.add('present__item-hover');

  //   });
  //   item.addEventListener('mouseout', (e) => {
  //     item.classList.remove('present__item-hover');
  //   });
  // });
  // document.querySelector('.present').addEventListener('mouseout')
}
