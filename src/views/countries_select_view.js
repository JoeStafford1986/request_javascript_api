const PubSub = require('../helpers/pub_sub.js');

const SelectView = function(element) {
  this.element = element;
};

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('CountriesData:all-data-ready', () => {
    console.log(event.detail);
  })
};

module.exports = SelectView;
