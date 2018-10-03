$('header button').on('click', function () {
  $('body, html').animate({
    scrollTop: $('.portfolio').offset().top
  }, 500)
})