'use strict'

const test = new Set(); //새로운 객체 생성

test.add(1)
test.add(2)
test.add(3)
test.add(1);

for (const item of test) {
    console.log(item);
}
console.log(test); //Set(3) { 1, 2, 3 }
//중복을 허용하지 않는다.

const ret = test.has(2);

console.log(ret);