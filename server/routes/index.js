const githooks = require('./githooks');

const routes = [].concat(
  githooks
);

exports.register = (server, options, next) => {
  server.route(routes);
  next();
};

exports.register.attributes = {
  name: 'prefixed',
  version: '0.0.1',
};

