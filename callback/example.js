'use strict';

function add(a, b){
    return a + b;
}

function test(a, callback){
    let x = a;
    let y = 5;
    console.log(a);
    return callback(x, y);
}

const c = test(1, (x, y) => x + y);

console.log(c);