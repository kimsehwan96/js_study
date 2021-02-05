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
    
