var result = 0;

console.time('duration_sum');

for(var i = 0;i<=100;i++){
    result +=i;
}

console.timeEnd('duration_sum');
console.log('1 에서 100 : %d',result);
console.log('현 실 파 이 : %s', __filename);
console.log('현 실 파 패 : %s',__dirname);


var person = {name : "aaa", age : 20};
console.dir(person);

console.log('argv 갯수 : %d' ,process.argv.length);
console.dir(process.argv);

if(process.argv.length > 2){
    console.log('3번째 : %s',process.argv[2]);
}
process.argv.forEach(function(item,index){
    console.log(index + ' : ',item);
});

console.dir(process.env);
console.log('os : '+process.env[OS]);
