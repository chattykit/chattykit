const app = require('./app');
const config = require('./config');

const client = new app(config).client;
