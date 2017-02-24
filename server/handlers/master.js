const exec = require('child_process').exec;

module.exports = function develop(request, reply) {
  console.log('request', request);
  const child = exec('sh ~/balderdash.sh', (error, stdout, stderr) => {
    if (error) {
      throw error;
    }
    console.log(stdout);
    reply(stdout).code(200);
  });
};
