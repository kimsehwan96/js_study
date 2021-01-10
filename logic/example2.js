const value = !(true && false || true && false || !false);

// not은 괄호 밖이므로 맨 마지막에 처리된다.
// true && false 와 true && false 먼저 처리된다.
// 그이후에 || 연산자들이 하나씩 처리

console.log(value);