'use strict'

let string = 'Hello World';

let isStartWith = string.startsWith('H');
console.log(isStartWith); //true

let isIncludes = string.includes('Hello');
console.log(isIncludes); //true

let isEndWith = string.endsWith('d');
console.log(isEndWith); //true

const checkIfContains = () => {
    if (isStartWith && isIncludes && isEndWith) { //모두 참일경우에만 true 반환. && 연산자는 이렇게 활용
        return true
    }
}

const ret = checkIfContains();

console.log(ret); //true
