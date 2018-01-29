import flatpickr from 'flatpickr';
import { Russian } from 'flatpickr/dist/l10n/ru.js';

flatpickr('.js-datepicker',{
  'locale': Russian,
  'dateFormat': 'Y/m/d',
  'disableMobile': true
});
