const numbers = {
    a: 1,
    b: 2,
    get sum() { //getter 함수
        console.log('sum 함수가 실행됩니다 !');
        return this.a + this.b; //this는 numbers를 가리킴
    }
};

console.log(numbers.sum); // sum으로 ()를 안붙였는데도 실행된다.

numbers.b = 5;
console.log(numbers.sum);

