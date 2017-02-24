const exec = require('child_process').exec;

module.exports = function balderdash(request, reply) {
  console.log('request', request);
  const child = exec('sh ~/balderdash.sh', (error, stdout, stderr) => {
    if (error) {
      throw error;
    }
    console.log(stdout);
    reply(stdout).code(200);
  });
};
