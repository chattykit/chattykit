const { SampleAction } = require('../actions');

module.exports = {
  name: 'Sample Command',
  keyword: '!sc',
  actions: [
    /* Actions to invoke */
    SampleAction,
  ],
  events: [/* Events to trigger */],
};
