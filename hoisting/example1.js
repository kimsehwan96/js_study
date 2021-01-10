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