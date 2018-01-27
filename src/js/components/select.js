import {DOC, BODY} from '../_const.js';
class Select {
  constructor(config) {
    this.elem = $(config);
    this.options = this.elem.find('option');
    this.init();
  }
  init() {
    this._createWrapper();
    this._createElement();
    this._show();
    this._hide();
    this._placeholder();
    this._change();
    this._icon();
    this._label();
  }
  _createWrapper() {
    this.elem.wrap(`<div class="${Select.classes.wrapper}"></div>`);
  }
  get _parent() {
    return this.elem.closest(`.${Select.classes.wrapper}`);
  }
  get _fieldText() {
    return this._parent.find(`.${Select.classes.text}`);
  }
  // generate elements for custom select
  _createElement() {
    this._parent.append(`<div class="${Select.classes.field}"></div>`);
    this._parent.find(`.${Select.classes.field}`).append(`<div class="${Select.classes.text}"></div>`);
    this._parent.append(`<div class="${Select.classes.dropdown}"></div>`);
    this._parent.find(`.${Select.classes.dropdown}`).append(`<ul class="${Select.classes.list}"></ul>`);
    this.options.each((i, elem) => {
      let optionValue = $(elem).html();
      this._parent.find(`.${Select.classes.list}`).append(`<li>${optionValue}</li>`);
      this._parent.find(`.${Select.classes.list} li`).eq(0).addClass(Select.classes.active);
    });
  }
  get _children() {
    return this._parent.find('li');
  }
  get _field() {
    return this._parent.find(`.${Select.classes.field}`);
  }
  // show dropdown
  _show() {
    this._field.on('click', () => {
      if(!this._parent.hasClass(Select.classes.open)) {
        $(`.${Select.classes.wrapper}`).removeClass(Select.classes.open);
        this._parent.addClass(Select.classes.open);
      } else {
        this._parent.removeClass(Select.classes.open);
      }
    });
  }
  // close dropdown
  _hide() {
    BODY.click((e) => {
      if (!$(e.target).closest(`.${Select.classes.wrapper}`).length) {
        $(`.${Select.classes.wrapper}`).removeClass(Select.classes.open);
      }
    });
  }
  // generate text for select input field
  _placeholder() {
    let fieldText = this.elem.data('field');
    this._parent.find(`.${Select.classes.text}`).text(fieldText);
  }
  // change attributes after clicked option
  _change() {
    this._children.on('click', (e) => {
      let that = $(e.currentTarget);
      let text = that.text();
      let index = that.index();
      that.addClass(Select.classes.active).siblings().removeClass(Select.classes.active);
      this.options.eq(index)
        .attr('selected', true)
        .siblings()
        .removeAttr('selected');
      this._fieldText.html(text);
      this._parent.removeClass(Select.classes.open);
    });
  }
  _icon() {
    if(this.elem.data('icon')) {
      let iconName = this.elem.data('icon');
      let iconHtml = `<svg class="icon icon-${iconName}"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-${iconName}"></use></svg>`;
      this._parent.find(`.${Select.classes.field}`).append(iconHtml);
    }
  }
  _label() {
    if(this.elem.data('label')) {
      let iconName = this.elem.data('label');
      let iconHtml = `<svg class="icon icon-${iconName} icon-label"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-${iconName}"></use></svg>`;
      this._parent.find(`.${Select.classes.field}`).append(iconHtml);
    }
  }
}
Select.classes = {
  wrapper: 'custom-select',
  field: 'custom-select__field',
  text: 'custom-select__text',
  dropdown: 'custom-select__dropdown',
  list: 'custom-select__list',
  active: 'is-active',
  open: 'is-open'
};
$.fn.customSelect = function() {
  this.each((i, el) => new Select($(el)));
  return this;
};

$('.js-select').customSelect();
