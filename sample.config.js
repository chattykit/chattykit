module.exports = {
  // Change These
  identity: {
    username: '8toes',
    password: 'oauth:abc123456',
  },
  channels: ['8toes'],
  // Leave these alone, probably
  options: {
    debug: false,
  },
  connection: {
    cluster: 'aws',
    reconnect: true,
  },
};
