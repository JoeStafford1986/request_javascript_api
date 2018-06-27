const PubSub = require('../helpers/pub_sub.js');

const CountryDetailView = function(element) {
  this.element = element;
};

CountryDetailView.prototype.bindEvents = function () {
  PubSub.subscribe('CountriesData:single-country-ready', (event) => {
    const countryData = event.detail;
    // console.log(countryData);
    this.render(countryData);
  })
};

CountryDetailView.prototype.render = function (countryData) {
  this.element.innerHTML = '';
  const country = countryData[0];

  const countryName = country.name;
  const countryRegion = country.region;
  console.log(country);

  const nameElement = this.createElement('h2', countryName);
  this.element.appendChild(nameElement);
  const regionElement = this.createElement('h3', `Region: ${countryRegion}`);
  this.element.appendChild(regionElement);
};

CountryDetailView.prototype.createElement = function (elementType, text) {
  const newElement = document.createElement(elementType);
  newElement.textContent = text;
  return newElement;
};

module.exports = CountryDetailView;
