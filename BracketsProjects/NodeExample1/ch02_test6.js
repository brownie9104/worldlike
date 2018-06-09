var nconf = require('nconf');
nconf.env();

console.log('OS 변수 : %s',nconf.get('OS'));