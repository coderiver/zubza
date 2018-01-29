
function anchorsMobDrop(windowW) {

  if(windowW > 1023) return;
  $('.js-anchors-mob-title').on('click', function() {

  	let $thisparent = $(this).parents('.js-anchors-mob-drop');
  	let $thisContent = $thisparent.find('.js-anchors-mob-content');


  	$thisparent.toggleClass('is-open');
  	$thisContent.slideToggle(300);
    $('.js-anchors-mob-close').toggleClass('is-hidden');
  });


  // $('.js-anchors-mob-close').on('click', function(e) {
  // 	e.preventDefault();
  //   e.stopPropagation();
  //   let $this =$(this);
  // 	let $parent = $this.parents('.js-anchors-mob-drop');
  // 	$parent.removeClass('is-open');
  // 	$parent.find('.js-anchors-mob-content').slideUp(300);
  //   $this.addClass('is-hidden');

  // });

  $(document).on('click', function(e) {
    if (!$(e.target).closest('.js-anchors-mob-drop').length) {
      $('.js-anchors-mob-content').slideUp(300);
      $('.js-anchors-mob-drop').removeClass('is-open');
    }
    e.stopPropagation();
  });
};
module.exports = anchorsMobDrop;
