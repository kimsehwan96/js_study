'use strict'

class Test {
    constructor() {

    }

    fn() {
        console.log("I'm instance method !");
    }

    //다른 언어에서의 스태틱 메서드와 동일함.
    static call() {
        console.log("calling !")
    }
    //다만 스태틱 메서드는 생성자로 선언한 멤버 변수에 접근이 안된다 !!
}

Test.call(); //calling !

// Test.fn(); <- 에러남