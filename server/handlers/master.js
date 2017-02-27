const exec = require('child_process').exec;
const boom = require('boom');
const gitHook = require('../lib/gitHook');
const debug = require('debug')('server-master');

module.exports = function develop(request, reply) {
  debug(request.payload.ref);
  const refRef = 'refs/heads/master';
  const shellPath = '~/GitHub/RepoName/.git/hooks/post-update';
  debug('check against', refRef);
  if (request.payload.ref === refRef) {
    gitHook(shellPath)
      .then((res) =>{
        debug(res);
        reply(res).code(200)
      })
      .catch((err) => {
        debug('err',err);
        reply(boom.notImplemented);
      })
  }
}

