const tmi = require('tmi.js');
const winston = require('./logger');
const db = require('./db');

const cmds = require('./cmds');
const actions = require('./actions');
// const events = require('./events');

function app(config) {
  if (!config) {
    winston.error('Config not supplied… quitting. Make sure app is called with valid config object arg in index.js');
    throw new Error();
  }
  [this.CHAN_NAME] = config.channels;
  this.client = new tmi.Client(config);

  // Register commands
  // TODO: Decide on standard function definition
  // TODO: Include command arguments
  const registerCmd = (cmd) => {
    winston.debug(`Registering ${cmd.name}`);
    winston.silly(`Actions: ${cmd.actions}`);

    // Verify cmd
    if (!cmd.hasOwnProperty('name') || !cmd.hasOwnProperty('name')) {
      winston.error(`Invalid command configuration: ${cmd.name}`);
      winston.error('If you\'ve added a new command recently, verify it is configured with all required properties.');
    }

    // Register new command keyword handler on client
    this.client.on('chat', function handler(_, user, msg, isSelf) {
      if (isSelf) return;
      const keyword = new RegExp(`^${cmd.keyword}`, 'i');
      if (msg.match(keyword)) {
        cmd.actions.forEach(action => action.call(this, user));
      }
    });
  };
  cmds.forEach(registerCmd);

  // ///////////////////////
  //  Basic info logging //
  // ///////////////////////
  this.broadcast = (msg) => {
    winston.debug(`Broadcast: ${msg}`);
    this.client.say(this.CHAN_NAME, msg);
  };
  this.client.on('connected', (address, port) => {
    winston.info(`Connected as ${this.client.username} at ${address} on ${port}`);
  });
  this.client.on('join', (channel, username) => {
    winston.info(`${username} has joined ${channel}`);
    db.users
      .find({ username })
      .then((user) => {
        if (user.length === 0) {
          db.users
            .insert({ username })
            .then(() => winston.debug(`Logged new user:${username}`));
        }
      }).catch(err => winston.error(err));
  });
  this.client.on('message', (_, user, msg, self) => {
    if (self) return;
    const { username } = user;
    // Ignore commands
    if (msg.match(/^!/) === null) {
      winston.info(`${username}: ${msg}`);
      db.msgs.insert({ username, msg });
    }
  });

  this.client.connect();
}

module.exports = app;
