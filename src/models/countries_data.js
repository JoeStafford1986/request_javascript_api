const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const CountriesData = function() {

};

CountriesData.prototype.bindEvents = function () {
  this.getAllData();

  PubSub.subscribe('SelectView:change', (event) => {

    const countryName = event.detail;
    this.publishCountryData(countryName);
  })
};

CountriesData.prototype.getAllData = function () {
  const url = `https://restcountries.eu/rest/v2/all`;
  request = new Request(url);
  request.get((allCountriesData) => {
    PubSub.publish('CountriesData:all-data-ready', allCountriesData);
  });
};

CountriesData.prototype.publishCountryData = function (countryName) {
  const url = `https://restcountries.eu/rest/v2/name/${countryName}`;
  request = new Request(url);
  request.get((countryData) => {
    PubSub.publish('CountriesData:single-country-ready', countryData);
  });
};

module.exports = CountriesData;
