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