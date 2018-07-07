var plugin = require('./assets/plugin.js');

module.exports = {
  hooks: {
    'page:before': function (page) {
      return plugin(this, page);
    }
  }
};
