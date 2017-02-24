const exec = require('child_process').exec;

module.exports = function githook(location) {
  return new Promise((resolve, reject) => {
    const child = exec(location, (error, stdout, stederr) => {
      if (error) {
        reject('problem running script');
      }
      resolve(stdout);
    })
  })
}
