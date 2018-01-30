const updTables = (tableIndex) => {

  $('.costs-table__col:not(:nth-child(1))').addClass('is-hidden');

  $('.costs-table__row').each((index, item) => {

    $(item).find(`.costs-table__col:nth-child(${tableIndex + 1})`).removeClass('is-hidden');;

  });

};

function clinicsSelectMob(windowW) {

  if(windowW > 1023) return;

  $('.js-clinics-select').each((index, item) => {

    let clinicSelect =  $(item).closest('.custom-select');

    let selectedOpt = $(clinicSelect).find('option:selected');
    let tableIndex = selectedOpt.data().clinic;

    updTables(tableIndex);

    clinicSelect.on('click', () => {

	  	let currentSelectedOpt = $(clinicSelect).find('option:selected');
	  	let currentTableIndex = selectedOpt.data().clinic;

	  	updTables(currentTableIndex);

	 });


  });

}

module.exports = clinicsSelectMob;
