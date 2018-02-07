
function reveiwDrop(windowW) {
  let dropContent = $('.js-review-drop-block');

  $('.js-toggler-review-block').on('click', function(e) {
  	e.preventDefault();
    dropContent.slideToggle(200);
  });

  $('.js-close-review-block').on('click', function() {
    dropContent.slideUp(200);
  });
}
module.exports = reveiwDrop;
