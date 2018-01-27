import PubSub from 'pubsub-js';
function popup() {
  $('.js-popup-link').on('click', function(e) {
    e.preventDefault();
    let $this = $(this),
      attr = $this.attr('data-popup'); 
    let target = $(`.js-popup[data-popup="${attr}"]`);

    if(target.hasClass('js-is-map-popup')) {
      PubSub.publish('open-map-popup');
    };
    
    target.fadeIn(300);
    $('body').addClass('is-hidden');
  });

  $('.js-popup-overlay, .js-close-popup').on('click', function() {
    $(this).parents('.js-popup').fadeOut(200);
    $('body').removeClass('is-hidden');
  });

  $('.js-popup-content').on('click', function(e) {
    e.stopPropagation();
  });

};
module.exports = popup;
