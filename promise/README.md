# Promise

- Promise는 비동기 작업의 최종 완료 또는 실패를 나타내는 객체임.
- 함수에 콜백을 전달하는 대신에 콜백을 첨부하는 방식의 객체임

- 프로미스는 다음 중 하나의 상태를 가짐
    - 대기 : 이행하거나, 거부되지않는 초기 상태
    - 이행 : 연산이 성공적으로 완료됨
    - 거부 : 연산 실패
- Promise.prototype.then() 및 Promise.prototype.catch() 메서드의 반환 값은 다른 프로미스이므로, 서로 연결할 수 있음.

```js
'use strict'

//셋타임아웃으로 강제로 비동기 로직을 안에 넣어둔 상태이며
//1초 이후에 리졸브 혹은 리젝트가 호출된다.
let asyncFunc = new Promise((resolve, reject) => {
    setTimeout(() => {
        let rand = Math.random() * 10;
        if (rand >= 5){
            resolve(rand);
        } else  {
            reject(rand);
        }
    }, 1000);
});

//#1
asyncFunc.then(function(number){
    console.log(number + " sucess");
})
.catch(err => {
    console.log("error occured ", err);
})

// promise.then(successCB, failCB)

//#2
asyncFunc.then((number)=> {
    console.log(number + " sucess");
}, (err)=>{
    console.log("error occured ", err);
})

// #1 & #2 똑같은 동작을 하는데.. 가독성 측면에서 1번이 낫다

//#3 change #1 function as arr func

asyncFunc.then((number)=>{
    console.log(number + " sucess");
})
.catch(err => {
    console.log("error occured ", err);
})

```