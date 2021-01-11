interface Shape {
    getArea(): number;
}

class Circle implements Shape {
    radius: number;//멤버 변수 선언

    constructor(radius: number){
        this.radius = radius; //생성시 radius 인자를 받아 멤버 변수에 넣음
    }

    getArea() {
        return this.radius * this.radius * Math.PI;
    }
}

const shapes: Shape[] = [new Circle(5), new Circle(2)];

shapes.forEach(shape => {
    console.log(shape.getArea());
})

interface Person {
    name: string;
    age?: number;//?는 설정 해도되고 안해도 되는 값
}

interface Developer extends Person {
    skills: string[]; //Person 인터페이스를 상속받음
}

