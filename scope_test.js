const { Personalize } = require("aws-sdk");

var a = 10;
var obj = {
    a : 20, 
    b : function() {
        console.log(this.a); //여기서 출력은 obj.a인 20이 출력

        function c() {
            console.log(this.a); // window.a 인 10을 출력. <- 이 부분은 메소드 안의 '함수' 이기 때문이다.
        }
        c();
    }
}
obj.b(); 

/* 둘다 똑같이 obj.a를 바라보게 하려면 ? */

var a = 10;
var obj = {
    a : 20,
    b : function () {
        var self = this;
        console.log(this.a); // <- self.a도 가능. 내부 변수로 this를 담고, this는 a 즉 20을 참조하기 때문에, self.a로 메소드 내 함수에서도 접근이 가능해 지는것
        // _this , that 등을 많이 사용

        function c(){
            console.log(self.a);
        }
        c()
    }
}
obj.b();


function a(x,y,z) {
    console.log(this, x,y,z);
}
var b = {
    c: 'eee'
};

a.call(b, 1,2,3);
a.apply(b,[1,2,3]);
var c = a.bind(b);
c(1,2,3);

/* a라는 함수는 x,y,z 라는 인자가 필요하고, 이 함수의 동작은 콘솔에 
this , x, y, z를 뿌리는 것이다. 여기서 a.call(b,1,2,3)의 경우,
call 메서드는 this, argvs...를 받기 떄문에, this라는 인자에는 b가 들어가서 출력에는
{c :'eee'} 와, 그 뒤에 argvs인 1,2,3이 나오는 것이다. */

var callback = function () {
    console.dir(this);
};

var obj = {
    a : 20,
    b : function (cb) {
        cb();
    }    
};
obj.b(callback);


function Person(n, a) {
    this.name = n;
    this.age = a;
}
var gom = new Person('gom', 30);
console.log(gom);