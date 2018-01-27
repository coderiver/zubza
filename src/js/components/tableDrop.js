$('.js-table-link').on('click', function(e) {
  e.preventDefault();
  if ($(this).hasClass('is-open')) {
    $('.js-table-link').removeClass('is-open').parents('.table__category').find('.js-table-more').slideUp();
  } else if($('.js-table-link').hasClass('is-open')) {
    $('.js-table-link').removeClass('is-open').parents('.table__category').find('.js-table-more').slideUp();
    $(this).addClass('is-open').parents('.table__category').find('.js-table-more').slideDown();
  } else {
    $(this).addClass('is-open').parents('.table__category').find('.js-table-more').slideDown();
  }

});
