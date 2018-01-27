import noUiSlider from 'nouislider';

const ranges = document.querySelectorAll('.js-range');

class Range {
  constructor(item) {
    this.range = item;
    this.container = $(this.range).closest('.range');
    this.inputMin = this.container.find('.range-inputs__field_min');
    this.inputMax = this.container.find('.range-inputs__field_max');
    this.min = parseInt($(this.range).data().min);
    this.max = parseInt($(this.range).data().max);
    this.step = $(this.range).data().step;
    this.start = $(this.range).data().start.split(' ');
    this.init();
  }

  update() {

  	this.range.noUiSlider.on('update', (values, handle) => {
  		this.inputMin.val(parseInt(values[0]));
  		this.inputMax.val(parseInt(values[1]));
  	});

  }

  initLib() {

  	noUiSlider.create(this.range, {
  		start: [this.start[0], this.start[1]],
      	connect: true,
      	step: this.step,
      	range: {
        	'min': this.min,
        	'max': this.max
     	}
  	});

  }

  init() {
  	this.initLib();
  	this.update();
  }
}

Array.from(ranges).forEach((item) => {
  new Range(item);
});
