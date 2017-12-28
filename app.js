const tmi = require('tmi.js');
const winston = require('./logger');
const db = require('./db');

class Chattykit {
  constructor(config) {
    if (!config) {
      winston.error('Config not supplied… quitting. Make sure app is called with valid config object arg in index.js');
      throw new Error();
    }
    [this.CHAN_NAME] = config.channels;
    this.client = new tmi.Client(config);
  }

  connect() {
    this.client.connect();
  }

  useCommands(cmds) {
    cmds.forEach(this.registerCmd.bind(this));
  }

  registerCmd(cmd) {
    winston.debug(`Registering ${cmd.name}`);
    winston.silly(`Actions: ${cmd.actions}`);

    // Verify cmd
    if (!cmd.hasOwnProperty('name') || !cmd.hasOwnProperty('name')) {
      winston.error(`Invalid command configuration: ${cmd.name}`);
      winston.error('If you\'ve added a new command recently, verify it is configured with all required properties.');
    }

    // Register new command keyword handler on client
    this.client.on('chat', (_, user, msg, isSelf) => {
      if (isSelf) return;
      const keyword = new RegExp(`^${cmd.keyword}`, 'i');
      if (msg.match(keyword)) {
        cmd.actions.forEach(action => action.call(this, user));
        // TODO: Call events
      }
    });
  }

  // TODO: Refactor, extract event handler definitions
  registerEvents() {
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
    this.client.on('roomstate', (_, state) => {
      db.state.find({ channel: `#${this.CHAN_NAME}` }).then((doc) => {
        if (!doc.length) {
          db.state.insert(state);
        }
      });
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
  }

  broadcast(msg) {
    winston.debug(`Broadcast: ${msg}`);
    this.client.say(this.CHAN_NAME, msg);
  }
}

module.exports = Chattykit;
