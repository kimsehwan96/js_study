const numbers = [10, 20, 30, 40];

// splice는 기존의 배열을 건드리지 않고, 인수도 조금 다름

const sliced = numbers.slice(0, 2); //star인덱스부터 end 인덱스 전까지 잘라낸것을 반환한다.
console.log(sliced);
console.log(numbers);