var path = require('path');

var dir = ["user","mike","docs"];
var doc = dir.join(path.sep);
console.log('dir : %s', doc);

var curPath = path.join('users/mike','notapad.exe');
console.log('path : %s',curPath);

var filename = "c\\users\\mike\\notepad.exe";
var dirname = path.dirname(filename);
var basename = path.basename(filename);
var extname = path.extname(filename);

console.log('dir : %s, base : %s, ext : %s',dirname,basename,extname);