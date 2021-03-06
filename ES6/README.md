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

## TypeChecking

```js
'use strict'

const string = 'node.js'
const array = []
const obj = {}
const number = 1;
console.log(typeof string); //string
console.log(typeof array); //object
console.log(typeof obj); //object
console.log(typeof number); //number

//array는 object의 일부임.
```

## arrow function

```js
API.prototype.get = function(resource) {
    var self = this;
    return new Promise(function(resolve, reject){
        htpp.get(self.uri + resource, function(data) {
            reslove(data);
        })
    })
}

//위 코드를 리팩토링 해보자 (this 바인딩)

API.prototype.get = (resource) => {
    new Promise((resolve, reject) => {
        http.get(this.uri + resource, (data) => {
            reslove(data);
        });
    });
};

//arrow function에서의 this 바인딩은, 자신의 상위 스코프에 바인딩 된다.
```

## Class

```js
'use strict'

module.exports = class cacheManager {
    //construct 는 promise 객체 반환 불가능.
    constructor(){
        this.config = []
    }

    addConfig (obj ={}) {
        this.config.push(obj)
    }
    getConfig() {
        return this.config
    }
}
```

```js
'use strict'

const cacheManager = require('./cache');

class sessionManager extends cacheManager { //cacheManager를 상속받음

}

const SessionManager = new sessionManager();

SessionManager.addConfig({
    token: 'random'
});

console.log(SessionManager.getConfig()); //[ { token: 'random' } ]

```

- 생성자 및 각종 메서드를 상속받아서 그대로 사용 가능 ~


### 메서드 상속

```js
'use strict'

class Robot {
    constructor(name) {
        this.name = name
    }
    speak() {
        console.log(`${this.name}`)
    }
}

class Ai extends Robot {
    constructor(name){
        super(name) //부모 클래스의 생성자를 호출하는 것.
        this.doubleName = name + name;
        //상속된 생성자 호출 후 이렇게 추가 로직 작성 가능
    }

    walk() {
        console.log(`${this.doubleName} is waking !`);
    }
}

const robot = new Robot('sehwan');
robot.speak();

const ai = new Ai('sehwan');
ai.walk();
```

### 클래스의 스태틱 메서드

```js
'use strict'

class Test {
    constructor() {

    }

    fn() {
        console.log("I'm instance method !");
    }

    //다른 언어에서의 스태틱 메서드와 동일함.
    static call() {
        console.log("calling !")
    }
    //다만 스태틱 메서드는 생성자로 선언한 멤버 변수에 접근이 안된다 !!
}

Test.call(); //calling !

// Test.fn(); <- 에러남
```

## 비구조화

```js
'use strict'

const obj = {
    title : 'node',
    value : 'sehwan zzang'
}

//배열이나 객체를 선언하는 것을 구조화 라고 함

// 비 구조화는 선언된 친구로부터 분리해서 받는거에요
//옛날엔 아래와 같이 함
// const title = obj.title;
// const value = obj.value

const { title, value } = obj;
console.log(title); //node
console.log(value);//sehwan zzang


const arr = [0, 1, 2];

const [ , b, c] = arr; //자리수를 맞추기 위해 빈 컴마를 넣어줌. b,c 만 쓰고 싶을때

console.log(b); // 1

```


## Generator

```js
'use strict'

//제네레이터 -> 클래스의 생성자와는 다른 개념. 생성하는 함수이다.
//제네레이터 -> yield 라는 특별한 문법을 사용 함. return 과는 좀 다름.
//yield -> 반환은 하는데 함수를 끝내진 않는다.
// 제네레이터는 arrow function 선언 불가능
function* log(){
    console.log(0, yield)
    console.log(1, yield)
    console.log(2, yield)
}

const gen = log();

gen.next('zero');
gen.next('first');
gen.next('second');
gen.next('third');

// 0 first
// 1 second
// 2 third

```

```js
const obj = {
    *gen() {
        let cnt = 0;
        yield ++cnt;
        yield ++cnt;
        yield ++cnt;
    }
}

const g = obj.gen()
console.log(g.next())
console.log(g.next())
console.log(g.next())

//  value: 1, done: false }
// { value: 2, done: false }
// { value: 3, done: false }

```

## Timers

```js
'use strict'

const timeoutObj = setTimeout(() => {
    console.log('first')
}, 0); //최소 1초 이후에 실행된다. 런타임 환경에 종속적임

const immediateObj = setImmediate(()=>{
    console.log('second')
})

// 실행 순서가 그때 그때 다르다 !

const intervalObj = setInterval(() => {
    console.log("interval");
}, 1000)

clearTimeout(timeoutObj);
clearTimeout(immediateObj);
clearTimeout(intervalObj);

//각각에 타이머를 초기화
```

## EventEmitter

```js
'use strict'

const EventEmitter = require('events');

class ChatManager extends EventEmitter {

}

const chatManager = new ChatManager();

chatManager.on("join", () => {
    console.log("new user joined");
})

chatManager.emit("join") //특정 이름의 이벤트를 발생시키는 것. on 메서드에서 이것을 감지했을떄의 콜백 펑션이 있으므로 수행된다.
// "new user joined"
```

## DNS

- node의 dns 모듈로 DNS lookup 가능함 !


```js
'use strict'

const dns = require('dns');

dns.lookup('google.com', (err, address, family) => {
    console.log(`address : ${address}, ${family}`)
})


dns.resolve4('archive.org', (err, addresses) => {
    if (err) throw err

    const res = JSON.stringify(addresses);
    console.log(res);

    addresses.forEach((item) =>{
        dns.reverse(item, (err, hostname) => {
            if (err) throw err

            console.log(`revers for ${item}; ${JSON.stringify(hostname)}`)
        })
    })
})
```

## File System

```js
'use strict'

const fs = require('fs')

//file은 stream 통해 읽거나, readfile 사용해 읽을 수 있다.

fs.readFile('test.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error(err)
        return
    }
    console.log(data);
})

//위 코드를 프라미스로 바꿔보자!

const content = 'something to write'

fs.writeFile('test_write.txt', content, err => {
    if (err) {
        console.error(err);
        return
    }
    console.log('success');
})
```

- 파일 읽기, 쓰기 간단한 예시 코드였음

```js
'use strict'

const fs = require('fs')
const { promisify } = require('util')

const read = promisify(fs.readFile) //이렇게 promisify 인자로 함수를 넣어주면 프라미스 처럼 동작한다는데 ? 덜덜..
const write = promisify(fs.writeFile)

const writeAndRead = async (data = '') => {
    try {
        await write('test_async.txt', data)
        return await read('test_async.txt');  // 이렇게 resolve 받은 값을 그냥 리턴해도 된다.
    } catch (err) {
        console.error(err);
    }

}

const res = writeAndRead('Hello ! this is async function with promisfy !!');
res.then((data) =>{
    console.log(data); // <Buffer 48 65 6c 6c 6f 20 21 20 74 68 69 73 20 69 73 20 61 73 79 6e 63 20 66 75 6e 63 74 69 6f 6e 20 77 69 74 68 20 70 72 6f 6d 69 73 66 79 20 21 21>

})
```

- 비동기 버전 ! `promisify` 라는 모듈로 동기 함수를 비동기화 하는게 가능하다 덜덜..

## Promise.All

```js
'use strict'

const promise1 = new Promise((resolve, reject) => resolve("즉시 호출 !"))
//실행 즉시 resolve가 되는 비동기 함수
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('3초 뒤에 호출'), 3000)
})
// 최소 3초 이후에 reslove를 실행합니다.

Promise.all([promise1, promise2])
    .then(value => console.log(value));

//3초 뒤에 모든 결과가 호출된다.
//첫번쨰 프라미스는 이미 reslove 되었음에도 , 뒤에 있는 promise2를 기다리고 호출한다.
//현업에서 많이 사용한다.
// 뭔ㄱ ㅏ여러 API를 호출하고, 그 결과를 조합해서 리턴을 해줘야 할 때 여러 API를 기다렸다가 조합하거나 병합해서 수행해주는거
```

