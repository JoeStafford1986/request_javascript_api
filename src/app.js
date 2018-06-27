const CountriesSelectView = require('./views/countries_select_view.js');
const CountryDetailView = require('./views/country_detail_view.js');
const CountriesData = require('./models/countries_data.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const selectElement = document.querySelector('select#countries');
  const countriesSelectView = new CountriesSelectView(selectElement);
  countriesSelectView.bindEvents();

  const countriesData = new CountriesData()
  countriesData.bindEvents();

  const detailsElement = document.querySelector('div#country');
  const countryDetailView = new CountryDetailView(detailsElement)
  countryDetailView.bindEvents();
});
