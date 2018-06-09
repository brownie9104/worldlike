var Person = [];
Person['age'] = 20;
Person['name'] = "aaaa";
Person.num = '010-1000-1010';

console.log('age : %d',Person.age);
console.log('name : %s',Person.name);
console.log('num : %s',Person.num);
console.log('num : %s',Person['num']);

function add(a,b){
    return a+b;
}

var result = add(10,10);
console.log('add(10,10) : %d',result);


var add2 = function(a,b){
    return a+b;
}

var result2 = add2(10,10);

console.log('add2(10,10) : %d',result2);

var Person = {
    add3 : function(a,b){
    return a+b;
    }
};
Person.age = 20;
Person.add = function(a,b){
    return a+b;
}

console.log('add3 : %d',Person.add(10,10));

Person.add2 = Person.add;
console.log('add4 : %d',Person.add2(10,10));
console.log('add5 : %d',Person.add3(10,10));