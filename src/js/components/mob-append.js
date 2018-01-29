export default function mobAppend() {
  $('.js-mob-move').each(function() {
    let element = $(this);
    let target = '.' + $(this).data('target');
    let source = '.' + $(this).data('source');

    console.log(target);

    function appendElements(elem) {
      if (window.matchMedia('(max-width: 1023px)').matches) {
        $(elem).appendTo(target);
      }
      if (window.matchMedia('(min-width: 1024px)').matches) {
        $(elem).appendTo(source);
      }
    }

    appendElements(element);

    $(window).on('resize', function(e) {
      appendElements(element);
    });
  });
}

mobAppend();
