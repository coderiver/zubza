import {DOC, BODY, ACTIVE } from '../_const.js';
import slick from 'slick-carousel';

class Gallery {

  constructor(item) {

    this.gallery = $(item);
    this.slider = this.gallery.find('.js-gallery-slider');
    this.sliderPagination = this.gallery.find('.js-gallery-pagination');
    this.init();
	
  }

  goTo() {

  	this.sliderPagination.on('click', (e) => {

  		let target = e.target || e.srcElement;
  		let hasSlideIndexItem = $(target).closest('.js-gallery-pagination');

  		if(hasSlideIndexItem.length === 0) return;

  		$(this.sliderPagination).each((index, item) => {
  			$(item).removeClass(ACTIVE);
  		});

  		let index = hasSlideIndexItem.data().slideIndex;
  		hasSlideIndexItem.addClass(ACTIVE);
  		this.slider.slick('slickGoTo', index);

  	});

  }

  initSlider() {

  	this.slider.slick({
  		slidesToShow: 1,
    	slidesToScroll: 1, 
    	prevArrow: '.btnPrev',
    	nextArrow: '.btnNext'
  	});

  }

  init() {
  	this.initSlider();
  	this.goTo();
  }

}

$('.js-gallery').each((index, item) => {
  new Gallery(item);
});
