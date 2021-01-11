const numbers2 :number[] = [10, 20, 30, 40, 50];

for (let number of numbers2){
    console.log(number); //파이썬의 for v in list: 와 비슷한듯.
}

const doggy = {
    name : "멍멍이",
    sound: "멍멍",
    age: 2
};

console.log(Object.keys(doggy)); //객체의 키값들만 배열로 이렇게 받아올 수 있음

console.log(Object.values(doggy)); //객체의 값들만 배열로 받고싶을때

console.log(Object.entries(doggy)); //배열 형태로 [ [키,값], [키,값]] 이렇게 반환된다.

for(let key in doggy){
    console.log(`${key} : ${doggy[key]}`);
}