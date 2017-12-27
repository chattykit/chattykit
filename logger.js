const winston = require('winston');
const config = require('./config');
const loglevel = config.verbose ? 'debug' : 'info';

const logger = new winston.Logger({
  transports: [
    new winston.transports.Console({
      timestamp: true, // TODO: Make this prettier
      level: loglevel,
      colorize: true,
      json: false

    }),
    new winston.transports.File({
      filename: 'mingler.log',
      json: true,
    })
  ]
});

module.exports = logger;
