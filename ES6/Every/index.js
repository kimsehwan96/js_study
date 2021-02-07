'use strict'

const arr = [2, 3, 4]

// Object.keys
// Object.value

const result = arr.every(key => key > 1);
// arr.every를 arrow function 조질때. value, index, array 순으로 넘길 수 있다.
// 배열의 모든 요소를 순회하면서, 만약 어떠한 조건이라도 만족하지 않으면 검사를 수행하지 않고 리턴한다 (boolean)
console.log(result);