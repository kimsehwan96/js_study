const a = [1, 2, 3]
const b = a.map(x => x + 1); //각각에 요소에 대해 1을 더한 요소를 모아 새로운 배열을 반환하게 된다.

console.log(b); //[ 2, 3, 4 ] 즉 새로운 배열을 반환하는것이 Map 메서드

const c = [1, 2, 3];
const f = a.filter(item => item > 1);
console.log(f); // [ 2, 3 ] 필터를 만족하는 원소에 대해서 새로운 배열로 반환됨