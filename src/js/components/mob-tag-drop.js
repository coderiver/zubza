import 'malihu-custom-scrollbar-plugin';
import 'jquery-mousewheel';

function MobTagDrop(windowW) {

  if(windowW > 1023) return;

  $('.js-tag-mob').each((index, item) => {

  	$(item).on('click', (e) => {

      let dropdown = $(item).find('ul');

      console.log(dropdown);

      $(dropdown).mCustomScrollbar({
        axis:'y',
        moveDragger:true
      });

      let target = e.target || e.srcElement;

  		if($(target).hasClass('js-tag-btn')) {
        e.preventDefault();
      }

  		$(item).toggleClass('is-open');

  		// if($(target).hasClass('js-tag-list-item')) {
  		// 	$(item).find('.js-tag-btn').val($(target).html());
  		// }

  	});

    $('body').on('click', (e) => {

      let target = e.target || e.srcElement;

      if($(target).closest('.js-tag-mob').length === 0) {
        $('.js-tag-mob').each((index, item) => {
          $(item).removeClass('is-open');
        });
      }

    });

  });

}


module.exports = MobTagDrop;
