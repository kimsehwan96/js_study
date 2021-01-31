'use strict'

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