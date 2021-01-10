# 호이스팅

- 아래있는 선언(만) 끌어올린다.

```js
// 함수 먼저

function hello1(){
    console.log('hello1');
}

hello1();

// 함수의 호출을 먼저

hello2(); //호출을 먼저했는데도 불구하고 잘 돌아간다.

function hello2(){
    console.log('hello2');
}
```

- var를 사용한 변수 역시 호이스팅 현상이 일어난다.

```js
age = 6;
age++;
console.log(age);
var age;
```
- 역시 잘 돌아간다.

```js
console.log(name); //undefined

name = 'Mark';

console.log(name);

var name;
```

- 결과

```console
undefined
Mark
```

```js
console.log(name); //undefined

name = 'Mark';

console.log(name);

var name = 'sehwan';

```

- 이것도 역시 undifined 이후 mark 가 출력된다.

- 결론은 변수의 선언만 호이스팅된다.
- 선언(만) 호이스팅 된다.

## let, const는 호이스팅 문제가 없다!

