function hello(name){
    console.log(`Hello, ${name}`); //` ` 안에 ${}로 변수를 너을수 있넴
}

function hello2(name){
    return `Hello ${name}!`;
}

hello("kimsehwan!");

const result = hello2("ksh!");

console.log(result);