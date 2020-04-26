function menuOnClick() {
  const menuClass = $(this).attr('data-togglemenu');
  $(`.${menuClass}`).toggleClass('active');
}

$('[data-togglemenu]').on('click', menuOnClick);


function menuOnScroll() {
  if (window.scrollY > 300) $('.mainmenu').addClass('mainmenu-fixed');
  else $('.mainmenu').removeClass('mainmenu-fixed');
}

$(document).on('scroll', menuOnScroll);
