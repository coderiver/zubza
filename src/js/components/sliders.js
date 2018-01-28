import Slick from 'slick-carousel';
function sliders() {
  let btnPrev = `<div class="btnPrev"><i><?xml version="1.0" encoding="utf-8"?>
  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
  viewBox="0 0 192 320" enable-background="new 0 0 192 320" xml:space="preserve">
  <polygon points="192,300.6 171.3,320 0,160 171.3,0 192,19.3 41.5,160 "/>
  </svg><i/></div>`;
  let btnNext = `<div class="btnNext"><i><?xml version="1.0" encoding="utf-8"?>
  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
  viewBox="0 0 192 320" enable-background="new 0 0 192 320" xml:space="preserve">
  <polygon points="0,19.4 20.7,0 192,160 20.7,320 0,300.7 150.5,160 "/>
  </svg></i></div>`;

  let sliderWithCount = $('.js-slider-count');
  sliderWithCount.each(function(index, elem) {

    let $this = $(elem),
      $parent = $this.parents('.js-slider-count-parent'),
      $countElem = $parent.find('.js-slider-count-all'),
      $currentElem = $parent.find('.js-slider-count-current-slide'),
      slideCount = $parent.find('.js-slider-count-slide').length;
    // let showOtherText = $parent.find('js-slider-count-other-btn');
    // let otherText = $parent.find('js-slider-count-other-text');

    $countElem.html(slideCount);

    $this.slick({
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1, 
      prevArrow: btnPrev,
      nextArrow: btnNext
    });
    $this.on('afterChange', function(event, slick, currentSlide, nextSlide) {
      $currentElem.html(currentSlide + 1);
    });
  });


  $('.js-dots-slider-oneslide').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1, 
    prevArrow: btnPrev,
    nextArrow: btnNext,
    dots: true
  });
  $('.js-double-slider').slick({
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1, 
    prevArrow: btnPrev,
    nextArrow: btnNext,
    dots: false
    // ,
    // centerMode: true,
    // variableWidth: true
  });

};
module.exports = sliders;
