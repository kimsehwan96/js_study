'use strict'

const arr = [1, 2, 3];

arr.forEach(item => console.log(item));
//1 2 3 출력
//forEach는 배열의 값을 순차적으로 순회. forEach의 첫번쨰 인자는 콜백 함수며, 콜백함수의 인자로는 value, index, array 순으로 들어감

const newArr = []

arr.forEach(item => {
    newArr.push(item);
});
console.log(newArr);
//어레이 clone목적으로는 위처럼 사용하는것이 아니라. spread를 사용하세요.

const newArr2 = [...arr];

console.log(newArr2);