// making a change
const addCorsHeaders = require('hapi-cors-headers');
const Blipp = require('blipp');
const config = require('./config');
const Hapi = require('hapi');
const HapiSwagger = require('hapi-swagger');
const Inert = require('inert');
const routes = require('./server/routes');
const Vision = require('vision');
const debug = require('debug')('server');

const server = new Hapi.Server();

// Start Hapi connection
server.connection(config.connection);

// add cors headers
server.ext('onPreResponse', addCorsHeaders);

// Register Hapi Plugins
server.register([
  Inert,
  Vision,
  Blipp,
  {
    register: HapiSwagger,
    options: config.swaggerOptions,
  },
], err => err);

const cache = server.cache({ segment: 'sessions', expiresIn: 3 * 24 * 60 * 60 * 1000 });
server.app.cache = cache;

// Set up Auth Strategies

// Prefix Routes with prefix plugin
server.register({ register: routes }, {
  routes: {
    prefix: config.prefix,
  },
}, (err) => {
  if (err) {
    throw err;
  }
});

server.start(() => {
  debug('started successfully');
});

module.exports = server;
