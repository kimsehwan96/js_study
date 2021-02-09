'use strict'

class Myclass{
    constructor(name) {
        //생성자
        this.name = name;
    }
    method1(){
        //methods
        return this.name;
    }
    static method2(){
        return 'default string'
    }
}

const mc = new Myclass('kim')

const name = mc.method1();


console.log(name)

const df = Myclass.method2();

console.log(df);

console.log(Object.getOwnPropertyNames(Myclass.prototype));
// [ 'constructor', 'method1' ]
// 스태틱 메서드는 어디감?
