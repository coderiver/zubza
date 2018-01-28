import sayHello from './lib/sayHello.js';
import faqDrop from './components/faqDrop.js';
import sliders from './components/sliders.js';
import popup from './components/popup.js';
import gmap from './components/gmap.js';
import './components/select.js';
import './components/gallery.js';
import './components/tableDrop.js';
import './components/range.js';
import './components/data-picker.js';
import './components/showMore.js';

sayHello();
$(document).ready(function() {
  faqDrop();
  sliders();
  popup();
  gmap();

// ready
});
