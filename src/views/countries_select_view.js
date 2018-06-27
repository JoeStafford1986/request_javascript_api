const PubSub = require('../helpers/pub_sub.js');

const SelectView = function(element) {
  this.element = element;
};

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('CountriesData:all-data-ready', (event) => {
    console.log(event.detail);
    this.populate(event.detail);

    this.element.addEventListener('change', (event) => {
      const selectedIndex = event.target.value;
      console.log(`${event.target.value}`);
    })
  })
};

SelectView.prototype.populate = function (dataOptions) {
  dataOptions.forEach((dataOption, index) => {
    const option = document.createElement('option');
    option.textContent = dataOption.name;
    option.value = index;
    this.element.appendChild(option);
  });
};

module.exports = SelectView;
