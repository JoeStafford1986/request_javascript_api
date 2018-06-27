const CountriesSelectView = require('./views/countries_select_view.js');
const CountriesData = require('./models/countries_data.js')

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const selectElement = document.querySelector('select#countries');
  const countriesSelectView = new CountriesSelectView()
  countriesSelectView.bindEvents();

  const countriesData = new CountriesData()
  countriesData.bindEvents();
});
