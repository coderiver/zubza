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

  let postBtnPrev = `<button class="btn-prev js-post-prev">
  <svg width="16" height="19" xmlns="http://www.w3.org/2000/svg">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 19">
  <path d="M16 19L0 9.6 16 0c-.6 3.2-1 6.4-1 9.6 0 3.1.4 6.3 1 9.4z" fill="#ffffff"/>
  </svg></svg></button>`;
  let postBtnNext = `<button class="btn-next js-post-next">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 19">
  <path d="M0 0l16 9.4L0 19c.6-3.2 1-6.4 1-9.6C1 6.3.6 3.1 0 0z" fill="#ffffff"/>
  </svg></button>`;

  let mobBtnPrev = `<button class="btn-prev-mob ">
  <svg width="16" height="19" xmlns="http://www.w3.org/2000/svg">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 19">
  <path d="M16 19L0 9.6 16 0c-.6 3.2-1 6.4-1 9.6 0 3.1.4 6.3 1 9.4z" fill="#ffffff"/>
  </svg></svg></button>`;
  let mobBtnNext = `<button class="btn-next-mob ">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 19">
  <path d="M0 0l16 9.4L0 19c.6-3.2 1-6.4 1-9.6C1 6.3.6 3.1 0 0z" fill="#ffffff"/>
  </svg></button>`;




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
  $('.js-badge-slider').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $('.js-badge-prev'),
    nextArrow: $('.js-badge-next'),
    responsive: [
      {
        breakpoint: 4000,
        settings: {
          prevArrow: $('.js-badge-prev'),
          nextArrow: $('.js-badge-next'),
        }
      },
      {
        breakpoint: 1023,
        settings: {
          infinite: false,
          slidesToShow: 3,
          slidesToScroll: 1,
          prevArrow: postBtnPrev,
          nextArrow: postBtnNext,
          dots: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          infinite: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          prevArrow: postBtnPrev,
          nextArrow: postBtnNext,
          dots: true
        }
      },
      {
        breakpoint: 599,
        settings: {
          infinite: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow: postBtnPrev,
          nextArrow: postBtnNext,
          dots: true
        }
      }
    ]
  });


  $('.js-mob-posts-slider').slick({
    responsive: [
      {
        breakpoint: 4000,
        settings: 'unslick'
      },
      {
        breakpoint: 1023,
        settings: {
          infinite: false,
          slidesToShow: 3,
          slidesToScroll: 1,
          prevArrow: postBtnPrev,
          nextArrow: postBtnNext,
          dots: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          infinite: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          prevArrow: postBtnPrev,
          nextArrow: postBtnNext,
          dots: true
        }
      },
      {
        breakpoint: 599,
        settings: {
          infinite: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow: postBtnPrev,
          nextArrow: postBtnNext,
          dots: true
        }
      }
    ]
  });
  $('.js-mob-sales-slider').slick({
    responsive: [
      {
        breakpoint: 4000,
        settings: 'unslick'
      },
      {
        breakpoint: 1023,
        settings: {
          infinite: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow: postBtnPrev,
          nextArrow: postBtnNext,
          dots: true
        }
      }
    ]
  });
  $('.js-license-mob-slider').slick({
    responsive: [
      {
        breakpoint: 4000,
        settings: 'unslick'
      },
      {
        breakpoint: 1023,
        settings: {
          infinite: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          prevArrow: postBtnPrev,
          nextArrow: postBtnNext,
          dots: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          infinite: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow: postBtnPrev,
          nextArrow: postBtnNext,
          dots: true
        }
      }
    ]
  });

};
module.exports = sliders;
