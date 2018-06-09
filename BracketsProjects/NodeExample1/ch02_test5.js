var calc = require('./calc');
console.log('분리 후 호출 : %d',calc.add(10,10));

var calc2 = require('./calc2');
console.log('분리 후 호출 : %d',calc2.add(20,20));