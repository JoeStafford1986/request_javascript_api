const CountriesSelectView = require('./views/countries_select_view.js');
const CountriesData = require('./models/countries_data.js')

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const selectElement = document.querySelector('select#countries');
  console.log(selectElement);
  const countriesSelectView = new CountriesSelectView(selectElement);
  countriesSelectView.bindEvents();

  const countriesData = new CountriesData()
  countriesData.bindEvents();
});
