import PubSub from 'pubsub-js';
function popupSlider() {
  let postBtnPrev = `<button class="btn-prev js-post-prev">
  <svg width="16" height="19" xmlns="http://www.w3.org/2000/svg">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 19">
  <path d="M16 19L0 9.6 16 0c-.6 3.2-1 6.4-1 9.6 0 3.1.4 6.3 1 9.4z" fill="#ffffff"/>
  </svg></svg></button>`;
  let postBtnNext = `<button class="btn-next js-post-next">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 19">
  <path d="M0 0l16 9.4L0 19c.6-3.2 1-6.4 1-9.6C1 6.3.6 3.1 0 0z" fill="#ffffff"/>
  </svg></button>`;
  let imgUrls = [];
  let popSlider = $('.js-popup-slider');
  let activeNumber;
  let token = PubSub.subscribe('open-popup-gallery', function(msg, data) {
    activeNumber = data.attr('data-slide-to-open') - 1;
    getImgUrl(data);
  });

  let token2 = PubSub.subscribe('close-popup-gallery', function(msg, data) {
    clearSlider();
    clearImgArr();
  });

  function getImgUrl(link) {
    let $parent = link.parents('.js-gallery-wrapper');

    $parent.find('img[data-big-img]').each(function(index, item) {
      imgUrls.push($(item).attr('data-big-img'));
    });

    addSlidesToSlider();
  };
  function addSlidesToSlider() {

    for (let i = 0; i < imgUrls.length; i++) {
      popSlider.append(`<div class="slide"><img src="${imgUrls[i]}" alt="alt" /></div>`);

    }
    initSlider();
  };
  function initSlider() {
    popSlider.slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: postBtnPrev,
      nextArrow: postBtnNext
    });
    popSlider.slick('slickGoTo', activeNumber);
  };

  function clearSlider() {
    popSlider.slick('unslick');
    popSlider.html('');
  };
  function clearImgArr() {
    imgUrls.length = 0;
  };
};
module.exports = popupSlider;
