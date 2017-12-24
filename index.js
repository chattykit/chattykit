// const CLIENT_ID = process.env.CLIENT_ID;
const USERNAME = process.env.USERNAME;
const OAUTH = process.env.OAUTH_TOKEN;
const tmi = require('tmi.js');

const options = {
  options: {
    debug: true,
  },
  connection: {
    cluster: 'aws',
    reconnect: true,
  },
  identity: {
    username: USERNAME,
    password: OAUTH,
  },
  channels: [USERNAME]
};

const client = new tmi.client(options);
client.connect();

client.on('connected', (address, port) => {
  console.log(address, port);
});
