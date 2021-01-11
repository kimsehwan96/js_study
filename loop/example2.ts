interface Animal {
    name: string;
    age: number;
    barking(): void;
}

class Cat implements Animal{
    name: string;
    age: number;
    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    }
    barking(): void {
        const barkingSound: string  = `${this.name} : 야옹`;
        console.log(barkingSound);
    }
}

class Dog implements Animal{
    name: string;
    age: number;
    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    }
    barking(): void {
        const barkingSound: string  = `${this.name} : 멍멍`;
        console.log(barkingSound);
    }
}
//let animals: Animal[]; <- 왜 이건 안되지 했더니만. 기본으로 [] 이케 빈 배열을
//선언을 안해줬으니 push라는 메서드가 뭔지 어떻게 알것어..
let animals: Animal[] = [];

animals.push(new Dog("멍멍이", 5));
animals.push(new Cat("야옹이", 3));
animals.push(new Dog("멍뭉이", 2));

let i = 0;

while(i < animals.length){
    animals[i].barking();
    i++;
}