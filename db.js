const Nedb = require('nedb-promises');
const winston = require('./logger');

const databases = [
  'users',
  'msgs',
  'events',
];

const db = {};

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
    },
  };
}
databases.forEach((name) => {
  db[name] = new Nedb(template(name));
});
db.state = new Nedb({
  filename: 'db/state.db',
  autoload: true,
  timestampData: false,
  onload(err) {
    if (err) {
      winston.error(err);
    } else {
      winston.debug('State loaded');
    }
  },
});

module.exports = db;
