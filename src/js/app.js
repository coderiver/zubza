import sayHello from './lib/sayHello.js';
import faqDrop from './components/faqDrop.js';
import sliders from './components/sliders.js';
import popup from './components/popup.js';
import gmap from './components/gmap.js';
import servicesMobDrop from './components/services-mob-drop.js';
import './components/select.js';
import './components/gallery.js';
import './components/tableDrop.js';
import './components/range.js';
import './components/data-picker.js';
import './components/burgerMenu.js';
import './components/showMore.js';
import './components/mob-filters.js';

sayHello();
$(document).ready(function() {
  let windowW = $(document).width();

  faqDrop(windowW);
  sliders();
  popup();
  gmap();
  servicesMobDrop(windowW);

// ready
});
