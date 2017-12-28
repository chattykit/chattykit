const Chattykit = require('./app');
const config = require('./config');
const cmds = require('./cmds');

const client = new Chattykit(config);
client.useCommands(cmds);
client.connect();
