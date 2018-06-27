const PubSub = require('../helpers/pub_sub.js');

const SelectView = function(element) {
  this.element = element;
};

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('CountriesData:all-data-ready', (event) => {
    this.populate(event.detail);

    this.element.addEventListener('change', (event) => {
      const selectedCountryName = event.target.value;

      PubSub.publish('SelectView:change', selectedCountryName);
    })
  })
};

SelectView.prototype.populate = function (dataOptions) {
  dataOptions.forEach((dataOption) => {
    const option = document.createElement('option');
    option.textContent = dataOption.name;
    option.value = dataOption.name;
    this.element.appendChild(option);
  });
};

module.exports = SelectView;
