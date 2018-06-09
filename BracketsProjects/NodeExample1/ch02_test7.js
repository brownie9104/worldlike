var os = require('os');

console.log('hostname : %s',os.hostname());
console.log('mem : %d / %d',os.freemem(),os.totalmem());
console.log('cpus\n');
console.dir(os.cpus());
console.log('interface\n');
console.dir(os.networkInterfaces());