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