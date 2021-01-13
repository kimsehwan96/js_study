# 화살표 함수
- 화살표 함수는 function 키워드 대신 화살표를 사용하여
- 간략한 방법으로 함수를 선언 할 수 있다.

```js

() => {...};
x => {...};

(x, y) => {...}; //

x => { return x * x }; //한줄 블록
x => x * x //함수 몸체가 한줄의 구문이면, 중괄호 생략 가능, 리턴

() => { return { a: 1}; } //객체 반환
() => ({ a: 1}) //객체를 암묵적으로 반환하고 싶을때 소괄호 사용

() => {
    const x = 10;
    return x * x;
}

```

화살표 함수는 익명으로 사용 가능하다.

```js
//ES5

var pow = function(x) {return x * x;};
console.log(pow(10));

//ES6

const pow = x => x * x;
console.log(pow(10));
```