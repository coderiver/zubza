function MobTagDrop(windowW) {

  if(windowW > 1023) return;

  $('.js-tag-mob').each((index, item) => {

  	$(item).on('click', (e) => {

  		e.preventDefault();

  		$(item).toggleClass('is-open');

  		let target = e.target || e.srcElement;

  		if($(target).hasClass('js-tag-list-item')) {
  			$(item).find('.js-tag-btn').val($(target).html());
  		}

  	});

  });

}


module.exports = MobTagDrop;
