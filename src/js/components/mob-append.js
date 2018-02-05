export default function mobAppend() {


  function appendElements() {
    if (window.matchMedia('(max-width: 1023px)').matches) {
      $('.js-map-move').appendTo('.js-map-mob-append');
    }
    if (window.matchMedia('(min-width: 1024px)').matches) {
      $('.js-map-move').appendTo('.js-map-desk-append');
    }
  }

  appendElements();

  $(window).on('resize', function(e) {
    appendElements();
  });
}

mobAppend();
