const tmi = require('tmi.js');
const winston = require('./logger');
const db = require('./db');

function app(config) {
  if (!config) {
    winston.error('Config not supplied… quitting. Make sure app is called with valid config object arg in index.js');
    throw new Error();
  }
  this.client = new tmi.client(config);

  // Basic info messages
  this.client.on('connected', (address, port) => {
    winston.info(`Connected as ${this.client.username} at ${address} on ${port}`);
    this.client.action(config.channels[0], 'has risen once more!');
  });

  this.client.on('join', (channel, username) => {
    winston.info(`${username} has joined ${channel}`);
    db.users.find({ username }, (err, user) => {
      if (err) winston.error(err);
      else if (user.length === 0) {
        db.users.insert({ username }, (err) => {
          if (err) {
            winston.error(err);
          } else {
            winston.debug(`Logged new user:${username}`);
          }
        });
      }
    });
  });

  this.client.on('message', (_, user, msg, self) => {
    if (self) return;
    const { username } = user;
    winston.info(`${username}: ${msg}`);
    db.msgs.insert({ username, msg });
  });

  this.client.connect();
  return this.client;

}
// TODO: Import and register event configurations

module.exports = app;
