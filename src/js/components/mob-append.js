export default function mobAppend() {


  function appendElements() {
    if (window.matchMedia('(max-width: 1023px)').matches) {
      $('.js-map-move').appendTo('.js-map-mob-append');

      $('.js-right-move').each(function() {
        let mob = $(this).closest('.clinic-box').find('.js-right-mob-append');
        $(this).appendTo(mob);
      });

      $('.js-title-move').each(function() {
        let mob = $(this).closest('.clinic-box').find('.js-title-mob-prepend');
        $(this).prependTo(mob);
      });
    }
    if (window.matchMedia('(min-width: 1024px)').matches) {
      $('.js-map-move').appendTo('.js-map-desk-append');

      $('.js-right-move').each(function() {
        let desk = $(this).closest('.clinic-box');
        $(this).appendTo(desk);
      });

      $('.js-title-move').each(function() {
        let desk = $(this).closest('.clinic-box').find('.js-title-desk-prepend');
        $(this).prependTo(desk);
      });
    }
  }

  appendElements();

  $(window).on('resize', function(e) {
    appendElements();
  });
}

mobAppend();
