const superheros = [
    '아이언맨',
    '캡틴 아메리카',
    '토르',
    '닥터 스트레인지'
];

// function print(hero){
//     console.log(hero);
// }

// superheros.forEach(print); //전달받은 콜백 함수의 인자에 각 원소를 한번씩 넣는다.

// superheros.forEach(function(hero){
//     console.log(hero);
// })


superheros.forEach((items) => { //화살표 함수
    console.log(items);
});


const array = [1,2,3,4,5,6,7,8];

// const squared = []

// for (let i = 0; i < array.length; i++){
//     squared.push(array[i]*array[i]);
// } 가능하지만 별로

// array.forEach( n => {
//     squared.push(n * n);
// }) 낫배드

// const square = n => n * n;

// const squared = array.map(square)

const squared = array.map(n=> n * n);
console.log(squared);


const items = [
    {
        id : 1,
        text: 'hello'
    },
    {
        od: 2,
        text: 'by'
    }
]

const texts = items.map(item=> item.text); //새로운 배열에 처리한 값을 넣고 싶을때 map
//단순 순회는 forEach 수행

console.log(texts)
