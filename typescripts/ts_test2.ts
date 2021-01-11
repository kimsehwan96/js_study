const message: string = "Hi !";

const done: boolean = false;

const numbers: number[] = [1, 2, 3];
const messages: string[] = ['hello!', 'world!'];

messages.push("test"); //다른 타입의 데이터를 너을수 없당

let mightBeUndefinned: string | undefined = undefined; //string 혹은 undefined

let nullabelNumber: number | null = null; //number이거나 null

let color: 'red' | 'orange' | 'yellow' = 'red'; //저 ㅁ문자열들 중 하나임


function sum(x: number, y: number): number {
    return x + y;
}

console.log(sum(5,6));

function sumArray(numbers: number[]): number {
    return numbers.reduce((acc, current) => acc + current, 0);
}

const total: number = sumArray([1,2,3,4,5]);

console.log(total);