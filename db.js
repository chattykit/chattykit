const nedb = require('nedb');
const winston = require('./logger');

const databases = [
  'users',
  'msgs',
  'events',
];

let db = {};

function template(name) {
  return {
    filename: `db/${name}.db`,
    autoload: true,
    timestampData: true,
    onload(err) {
      if (err) {
        winston.error(err);
      } else {
        winston.debug(`${name} database loaded`);
      }
    }
  };
}
databases.forEach((name) => {
  db[name] = new nedb(template(name));
});

module.exports = db;
