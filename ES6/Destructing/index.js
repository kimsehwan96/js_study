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
