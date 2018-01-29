
function servicesMobDrop(windowW) {
  if(windowW > 1023) return;
  $('.js-mob-services-title').on('click', function() {

  	let $services = $('.js-mob-services');
  	let $content = $('.js-mob-services-content');
  	let $thisparent = $(this).parents('.js-mob-services');
  	let $thisContent = $thisparent.find('.js-mob-services-content');

  	$services.not($thisparent).removeClass('is-open');
  	$services.not($thisparent).find($content).slideUp(300);

  	$thisparent.toggleClass('is-open');
  	$thisContent.slideToggle(300);
  });


  // $('.js-faq-drop-btn-close').on('click', function(e) {
  // 	e.preventDefault();
  // 	let $parent = $(this).parents('.js-faq-drop');
  // 	$parent.removeClass('is-open');
  // 	$parent.find('.js-faq-drop-content').slideUp(300);

  // });
};
module.exports = servicesMobDrop;
