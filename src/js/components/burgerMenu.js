import {DOC, ACTIVE} from '../_const';

const burger = '.js-burger';
const submenu = $('.js-submenu');

DOC.on('click', burger, (e) => {
  let that = $(e.currentTarget);
  that.toggleClass(ACTIVE);
  submenu.toggleClass(ACTIVE);
});
