const exec = require('child_process').execFile;
const debug = require('debug')('handler');

module.exports = function gitHook(location) {
  return new Promise((resolve, reject) => {
    const child = exec(location, (error, stdout, stderr) => {
      if (error) {
        debug('Error=>')
        reject('problem running script');
      }
      debug('lib=>', stdout);
      resolve(stdout);
    })
  })
}
