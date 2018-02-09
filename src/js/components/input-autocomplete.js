import 'malihu-custom-scrollbar-plugin';
import 'jquery-mousewheel';

class InputAutocomplete {

  constructor(container) {

    this.container = container;
    this.dropdown = $(this.container).find('.js-input-autocomplete-drop');
    this.input = $(this.container).find('input');
    this.values = $(this.dropdown).find('[data-value]');

  }

  setScrollbar() {

    $(this.dropdown).mCustomScrollbar({
      axis:'y',
      moveDragger:true
    });

  }

  chooseItem() {

  	$(this.dropdown).on('click', (e) => {

  		let target = e.target || e.srcElement;
  		let item = $(target).closest('[data-value]');

  		if(!item.closest('[data-value]').length) return;

  		let value = $(item).data().value;

  		$(this.input).val(value);

  	});

  }	

  autocomplete(value) {

  	$(this.dropdown).removeClass('is-empty');

  	if(value.length === 0) {
  		$(this.values).each((index, item) => {
  			$(item).removeClass('is-hidden');
  		});
  		return;
  	}

  	let emptyIndex = 0;

  	$(this.values).each((index, item) => {

  		let currentItem = $(item);
  		let itemValue = currentItem.data().value;

  		if(itemValue.indexOf(value) !== -1) {
  			currentItem.removeClass('is-hidden');
  		} else {
  			currentItem.addClass('is-hidden');
  			emptyIndex++;
  		}

  		if(emptyIndex === this.values.length) {
  			$(this.dropdown).addClass('is-empty');
  		}
		
    });

  }

  listenInput() {
  	$(this.input).on('keyup', (e) => {
  		let currentValue = $(this.input).val();
  		this.autocomplete(currentValue);
  	});
  }

  events() {

  	$(this.container).on('click', () => {
  		$(this.container).toggleClass('is-active');
  	});

  	$(document).on('click', (e) => {

  		let target = e.target || e.srcElement;
  		if(target.closest('.js-input-autocomplete')) return;

  		$(this.container).removeClass('is-active');

  	});

  	this.listenInput();
  	this.chooseItem();
  }

  init() {
  	this.setScrollbar();
  	this.events();
  }

}

$('.js-input-autocomplete').each((index, item) => {
  let autocomleteInput = new InputAutocomplete(item);
  autocomleteInput.init();
});
