export default function mobFilters() {
  $('.js-show-filters').on('click', function() {
    $('.js-mob-filters').addClass('is-active');
    $('body').addClass('is-filters-open');
  });

  $('.js-hide-filters').on('click', function() {
    $('.js-mob-filters').removeClass('is-active');
    $('body').removeClass('is-filters-open');
  });

  $('.js-show-meta-filters').on('click', (e) => {

  	const target = e.target || e.srcElement;
  	const container = $('.js-show-meta-filters');
  	if(!$(target).hasClass('js-show-meta-item')) return;

  	const select = $(container).find('select');
  	select.val(`${($(target).text()).trim()}`);

  	$('.js-show-meta-item').each((index, item) => {
  		$(item).removeClass('is-active');
  	});
  	$(target).addClass('is-active');
  });

}

mobFilters();
