import PubSub from 'pubsub-js';
function popup() {
  let bodyHiddenStatus = 0;
  $('.js-popup-link').on('click', function(e) {
    e.preventDefault();
    // console.log(bodyHiddenStatus);
    let body = $('body');
    let $this = $(this),
      attr = $this.attr('data-popup'); 
    let target = $(`.js-popup[data-popup="${attr}"]`);

    if(target.hasClass('js-is-map-popup')) {
      PubSub.publish('open-map-popup');
    };   
    if($this.hasClass('js-popup-gallery-link')) {
      PubSub.publish('open-popup-gallery', $this);
    };

    $('.js-popup').fadeOut(200);
    target.fadeIn(300);
    
    if(body.hasClass('is-hidden') && $('.js-submenu').hasClass('is-active')) {
      bodyHiddenStatus = 1;
      // console.log('has class');
       
    };
    body.addClass('is-hidden');

  });

  $('.js-popup-overlay, .js-close-popup').on('click', function(e) {
    e.stopPropagation();
    $(this).parents('.js-popup').fadeOut(200);
    if($(this).parents('.js-popup').attr('data-popup') === 'popup-slider') {
      PubSub.publish('close-popup-gallery');
    };

    // поведение для попапе в попапе
    if(bodyHiddenStatus === 1) {
      bodyHiddenStatus = 0;
    }else{
      $('body').removeClass('is-hidden');
    };
    // $('body').removeClass('is-hidden');
  });

  $('.js-popup-content').on('click', function(e) {
    e.stopPropagation();
  });

};
module.exports = popup;
