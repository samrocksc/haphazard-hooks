const exec = require('child_process').exec;
const boom = require('boom');
const githook = require('../lib/githook');

module.exports = function develop(request, reply) {
  const refRef = '/refs/heads/master';
  const shellPath = 'sh ~/GitHub/RepoName/.git/hooks/post-update';
  if (request.payload.ref === refRef) {
    gitHook(shellPath)
      .then((res) =>{
        reply(res).code(200)
      })
      .catch((err) => {
        reply(boom.notImplemented);
      })
  }
};
