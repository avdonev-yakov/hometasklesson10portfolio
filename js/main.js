$(function () {

  $(".header a, .footer a").on("click", function(scroll) {
    scroll.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 1500);
  });

  $('.reviews__slider').slick({
    dots: true,
    buttons: false,
    arrows: false,
  });

  const width = screen.width;

  if (width < 768)

  $('.header__burger, .menu__link').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');
    $('.header__burger').toggleClass('header__burger--active');
    $('body').toggleClass('fixed');
  });

  var mixer = mixitup('.portfolio__content');

});