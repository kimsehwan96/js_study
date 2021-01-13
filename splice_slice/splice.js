const numbers = [10, 20, 30, 40];

const index = numbers.indexOf(30);

// numbers.splice(index, 2); //index부터 몇개를 지우겠다
const spliced = numbers.splice(index, 2);
console.log(spliced); // 위 splice는 인덱스 2부터 2개를 지우겠다고, 이 메서드의 리턴값은 삭제된 값들 (numbers에는 삭제 이후 남은 값들)
console.log(numbers);
