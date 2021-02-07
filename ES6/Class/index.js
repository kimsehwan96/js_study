'use strict'

class Robot {
    constructor(name) {
        this.name = name
    }
    speak() {
        console.log(`${this.name}`)
    }
}

class Ai extends Robot {
    constructor(name){
        super(name) //부모 클래스의 생성자를 호출하는 것.
        this.doubleName = name + name;
        //상속된 생성자 호출 후 이렇게 추가 로직 작성 가능
    }

    walk() {
        console.log(`${this.doubleName} is waking !`);
    }
}

const robot = new Robot('sehwan');
robot.speak();

const ai = new Ai('sehwan');
ai.walk();