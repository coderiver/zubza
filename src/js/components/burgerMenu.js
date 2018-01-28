import {DOC, ACTIVE} from '../_const';

const burger = '.js-burger';

DOC.on('click', burger, (e) => {
  let that = $(e.currentTarget);
  that.toggleClass(ACTIVE);
});
