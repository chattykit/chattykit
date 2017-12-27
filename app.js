const tmi = require('tmi.js');
const winston = require('winston');

function app(config){
  const client = new tmi.client(config);
  client.connect();

  client.on('connected', (address, port) => {
    winston.info(`Connected at ${address} on ${port}`);
    client.action(config.channels[0], 'has risen once more!');
  });
  return client;

}
// TODO: Import and register event configurations

module.exports = app;
