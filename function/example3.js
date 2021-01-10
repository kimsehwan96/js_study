const add = (a, b) => {
    return a + b;
}

const add2 = (a, b) => a + b; //이렇게 화살표 뒤에 바로 리턴하게 활용 가능하다.

const hello = (name) => {
    console.log(`Hello ${name}!`);
}

const sum = add(1,2);

console.log(sum);

hello("kim se hwan !");