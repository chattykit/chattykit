const { users } = require('./db');
const winston = require('./logger');

module.exports = function Users() {
  this.get = username => new Promise((res, rej) => users
    .findOne({ username })
    .then(res)
    .catch(rej));

  this.insert = username => new Promise((res, rej) => users
    .insert({ username })
    .then(res)
    .catch(rej));

  /**
   * @async
   * @param {string} username
   * @return {Promise.<{username:string,_id:string}>}
   */
  this.register = async (username) => {
    let user;
    try {
      user = await this.get(username);
    } catch (error) {
      winston.error(error);
    }
    if (!user) {
      try {
        user = await this.insert(username);
      } catch (error) {
        winston.error(error);
      }
    }
    return user;
  };
};
