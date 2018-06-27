const PubSub = require('../helpers/pub_sub.js');

const CountryDetailView = function(element) {
  this.element = element;
};

CountryDetailView.prototype.bindEvents = function () {
  PubSub.subscribe('CountriesData:single-country-ready', (event) => {
    console.log(event.detail);
  })
};

module.exports = CountryDetailView;
