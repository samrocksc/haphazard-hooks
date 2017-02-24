const Joi = require('joi');

const balderdash = require('../handlers/balderdash');

module.exports = [
  {
    method: 'GET',
    path: '/balderdash',
    handler: balderdash,
    config: {
      description: 'BALDERDASH!',
      notes: 'Returns a 200',
      tags: ['api'],
    },
  },
];
