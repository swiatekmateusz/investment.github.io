function menuOnClick() {
  const menuClass = $(this).attr('data-togglemenu');
  $(`.${menuClass}`).toggleClass('active');
}

$('[data-togglemenu]').on('click', menuOnClick);


function menuOnScroll() {
  // Fixed menu
  if (window.scrollY > 300) $('.mainmenu').addClass('mainmenu-fixed');
  else $('.mainmenu').removeClass('mainmenu-fixed');

  // Active link
  $('.nav-desktop .mainmenu__link').each((i, item) => {
    const $item = $(item);
    const section = $item.attr('href').substr(1);
    console.log(section);
  });
}

$(document).on('scroll', menuOnScroll);
