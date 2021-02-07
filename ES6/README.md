# ES6

- ES6 === ES2015

- ES2015
    - 개선된 JavaScript 문법
    - ES6 Browser compatibility의 훌륭한 지누언
    - ES6를 기반으로 한 생태계의 확산
    
## Scope

```js
'use strict'

var name = 'global var';

function home() {
    var homevar = "homevar";
    for (var i = 0; i<100; i++){

    }
    console.log(i); // 100 출력
    // var는 전역 스코프이기 때문에 블록에 상관없이 100이 출력되었다.
    //만약 let i = 0;으로 선언했다면 오류가 발생했을 것이다.
}

home();
```

- `let`은 블록스코프를 갖는 변수이다.

### Closure
```js

var list = document.querySelectorAll('li');
for (var i=0; i<list.length; i++){
    list[i].addEventListener('click', function(){
        console.log(i + "번째 리스트입니다.");
    });
}
```

- li태그를 선택해도 모두 4번째 리스트입니다 라고 출력된다.

```js

var list = document.querySelectorAll('li');
for (let i=0; i<list.length; i++){
    list[i].addEventListener('click', function(){
        console.log(i + "번째 리스트입니다.");
    });
}
```

- 제대로 출력된다. 스코프의 문제

### const

```js
function home() {
    var homename = 'my house';
    console.log(homename);
    homename = 'your house';
    console.log(homename);
}
home();
//var나 let은 변할 수 있는 값
```


```js
function home() {
    const homename = 'my house';
    console.log(homename);
    homename = 'your house';
    console.log(homename);
}
home();
//const이므로 변수를 바꾸려고 할 때 런타임에서 오류가 발생한다.
```

- 이렇게 생각하자.
    - const를 기본으로 사용하자!
    - 대신 변경 될 수 있는 뱐수는 let을 사용한다.
    - var는 사용하지 않는다.
    
## every

- 배열의 모든 조건을 검사 할 때
    - 조건을 만족하지 않는 요소가 나오면 그 즉시 순회를 중단함
    
```js
'use strict'

const arr = [2, 3, 4]

// Object.keys
// Object.value

const result = arr.every(key => key > 1);
// arr.every를 arrow function 조질때. value, index, array 순으로 넘길 수 있다.
// 배열의 모든 요소를 순회하면서, 만약 어떠한 조건이라도 만족하지 않으면 검사를 수행하지 않고 리턴한다 (boolean)
console.log(result);
```

## Find
- 배열에서 특정한 요소를 찾는다.

```js
'use strict'

const arr = ['node', 'test'];

const ret = arr.find(key => key ==='node');

console.log(ret);
// 'node'
```

## Include
- 배열에서 특정한 조건을 걸어서 불리언을 리턴

```js
const res = arr.includes('node')

console.log(res);

//true
```

- find는 찾고 리턴까지
- includes는 있는지 없는지만 체크


## ForEach

- 배열의 각 아이템을 순회합니다.

```js
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
```

## Map

- Map의 인자로 주어진 콜백함수를 각 원소에 대해서 수행하고, 새로운 배열을 반환한다.

```js
const a = [1, 2, 3]
const b = a.map(x => x + 1); //각각에 요소에 대해 1을 더한 요소를 모아 새로운 배열을 반환하게 된다.

console.log(b); //[ 2, 3, 4 ] 즉 새로운 배열을 반환하는것이 Map 메서드
```

## Filter

- Filter의 인자로 주어진 조건을 수행하고, 조건에 맞는 원소들에 대해 새로운 배열을 반환한다.

```js

const c = [1, 2, 3];
const f = a.filter(item => item > 1);
console.log(f); // [ 2, 3 ] 필터를 만족하는 원소에 대해서 새로운 배열로 반환됨
```

## Object.assign

- 객체를 합치는 방법

```js
'use strict'

const obj = {
    title : 'node.js'
}

const newObj = {
    name: 'sehwan'
}

//두 객체를 어떻게 하나로 합칠까?

//Object.assign
//Object.assign(target:{}, source1: {}, source2: {} ...}
const ret = Object.assign({}, obj, newObj);

console.log(ret); //{ title: 'node.js', name: 'sehwan' }
```

- 이렇게 객체를 합칠 수 있지만. spread를 사용하도록 하자.

## Spread

```js
const spreadRet = {
    ...obj,
    ...newObj
}

console.log(spreadRet);//{ title: 'node.js', name: 'sehwan' }

```

- 객체 뿐만 아니라 array에서도 활용 가능

```js
const arr = [1, 2, 3]
const newArr = [4, 5, 6]

const arrRet = [...arr,
                ...newArr
]

console.log(arrRet); //[ 1, 2, 3, 4, 5, 6 ]

```

- 객체를 통합할 때 -> spread 연산자를 활용합시다.

## Set

```js
'use strict'

const test = new Set(); //새로운 객체 생성

test.add(1)
test.add(2)
test.add(3)
test.add(1);

for (const item of test) {
    console.log(item);
} //1 2 3

console.log(test); //Set(3) { 1, 2, 3 }
//중복을 허용하지 않는다.
```

## String methods

```js
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
```