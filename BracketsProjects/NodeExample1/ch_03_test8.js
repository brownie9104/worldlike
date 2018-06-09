var Users = [{a:111,b:"aaa"},{a:222,b:"bbb"}];
Users.push ({a:333,b:"ccc"});

console.log('count : %d',Users.length);
console.log('1b : %s',Users[0].b);

var add = function(a,b){
    return a+b;
}

Users.push(add);

console.log('count : %d',Users.length)
console.log('add : %d',Users[Users.length-1](10,10));

Users.push({a:555,b:'eee'});

for(var i =0;i<Users.length;++i)
{
    console.log('%d : %s',i,Users[i].b);
}

Users.forEach(function(item,index){
    console.log('2 %d : %s',index,item.b);
});

Users.pop();
console.log('count : %d',Users.length);
console.dir(Users);

delete Users[1];
console.log('count : %d',Users.length);
console.dir(Users);

Users.splice(1,2);
console.dir(Users);

Users.splice(3,0,{a:666,b:"fff"});
console.dir(Users);

var Users2 = Users.slice(1,3);
console.dir(Users);
console.dir(Users2);