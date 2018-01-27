import sayHello from './lib/sayHello.js';
import faqDrop from './components/faqDrop.js';
import sliders from './components/sliders.js';
import popup from './components/popup.js';
import './components/select.js';
import './components/tableDrop.js';

sayHello();
$(document).ready(function() {
  faqDrop();
  sliders();
  popup();

// ready
});
