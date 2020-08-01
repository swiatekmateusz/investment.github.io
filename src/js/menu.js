function menuOnClick() {
  const menuClass = $(this).attr('data-togglemenu');
  $(`.${menuClass}`).toggleClass('active');
}

$('[data-togglemenu]').on('click', menuOnClick);


$('.mainmenu__link, .mainmenu__button a').each((i, item) => {
  const $item = $(item);
  $item.on('click', () => {
    $('.mainmenu__mobile').removeClass('active');
    const section = $item.attr('href');
    const { top } = $(section).offset();
    const time = Math.floor(Math.abs(top - window.scrollY)) / 2;
    $([document.documentElement, document.body]).animate({
      scrollTop: top,
    }, time < 1500 ? 1000 : time);
  });
});

function menuOnScroll() {
  // Fixed menu
  if (window.scrollY > 300) $('.mainmenu').addClass('mainmenu-fixed');
  else $('.mainmenu').removeClass('mainmenu-fixed');

  // Active link
  $('.nav-desktop .mainmenu__link , .nav-desktop .mainmenu__button a').each((i, item) => {
    const $item = $(item);
    const section = $item.attr('href');
    const { top } = $(section).offset();
    if (window.scrollY >= top - 100) {
      // console.log(section);
      $('.mainmenu__link-active').removeClass('mainmenu__link-active');
      $item.addClass('mainmenu__link-active');
    } else $item.removeClass('mainmenu__link-active');
  });
}

$(document).on('scroll', menuOnScroll);
