# Class 

- 클래스의 생성 방법

```js
'use strict'

class Myclass{
    constructor(name) {
        //생성자
        this.name = name;
    }
    method1(){
        //methods
        return this.name;
    }
    static method2(){
        return 'default string'
    }
}

const mc = new Myclass('kim')

const name = mc.method1();


console.log(name)

const df = Myclass.method2();

console.log(df);

```

- 클래스는 함수의 한 종류이다.

```js
class User {
  constructor(name) { this.name = name; }
  sayHi() { alert(this.name); }
}

// User가 함수라는 증거
alert(typeof User); // function

```

- 위 문법 구조가 하는 역할은 정확히 다음과 같다.
- User라는 이름을 가진 함수를 만든다.
- 함수 본문은 생성자에서 가져온다.
- 메서드들은 User.prototype 에 저장한다.
