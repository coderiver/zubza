export default function mobFilters() {
  $('.js-show-filters').on('click', function() {
    $('.js-mob-filters').addClass('is-active');
    $('body').addClass('is-filters-open');
  });

  $('.js-hide-filters').on('click', function() {
    $('.js-mob-filters').removeClass('is-active');
    $('body').removeClass('is-filters-open');
  });
}

mobFilters();
