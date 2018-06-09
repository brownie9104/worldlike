function add(a,b,callback){
    var result = a+b;
    callback(result);
}

add(10,10,function(result){
    console.log('add : %d',result);
});

function add2(a,b,callback){
    var result = a+b;
    callback(result);
    
    var count = 0;    
    var history = function(){
        ++count;
        return count + '   ' +a+'+'+b+'='+result;
    };
    return history;
}

var add_his = add2(10,10,function(result){
    console.log('add2 : %d',result);
});
console.log('result : '+ add_his());
console.log('result : '+ add_his());
console.log('result : '+ add_his());
console.log('result : '+ add_his());

function person(a,b){
    this.a = a;
    this.b = b;
}

person.prototype.walk = function(c){
    console.log('c : %d',c);
}

var per1 = new person("a",1);
var per2 = new person("b",2);

console.log('a : %s',per1.a);
per1.walk(10);