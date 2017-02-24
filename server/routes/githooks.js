const Joi = require('joi');

const develop = require('../handlers/develop');
const master = require('../handlers/master');

module.exports = [
  {
    method: 'POST',
    path: '/develop',
    handler: develop,
    config: {
      description: 'Post Update on Develop Repo',
      notes: 'Returns a 200',
      tags: ['api'],
    },
  },
  {
    method: 'POST',
    path: '/master',
    handler: master,
    config: {
      description: 'Post Update on Master Repo',
      notes: 'Returns a 200',
      tags: ['api'],
    },
  },

];
