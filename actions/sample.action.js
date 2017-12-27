module.exports = function SampleAction(user) {
  const app = this;
  const { username } = user;
  app.broadcast(`${username} has invoked the sample action!`);
};
