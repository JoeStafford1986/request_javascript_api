const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const CountriesData = function() {

};

CountriesData.prototype.bindEvents = function () {
  this.getAllData();
};

CountriesData.prototype.getAllData = function () {
  const url = `https://restcountries.eu/rest/v2/all`;
  request = new Request(url);
  request.get((allCountriesData) => {
    PubSub.publish('CountriesData:all-data-ready', allCountriesData);
  });
};

module.exports = CountriesData;
