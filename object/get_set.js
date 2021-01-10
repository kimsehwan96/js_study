const numbers = {
    _a : 1,
    _b : 2,
    sum: 3,
    calculate(){
        console.log('calculate');
        this.sum = this._a + this._b;
    },
    get a(){
        return this._a;
    },
    get b(){
        return this._b;
    },
    set a(value){
        this._a = value;
        this.calculate();
    },
    set b(value){
        this._b = value;
        this.calculate();
    }
}


console.log(numbers.sum);

numbers.a = 5; //5라는 값이 들어가서 _a가 업데이트되고 a.sum또한 업데이트 된다 (함수 호출하도록 해놨으니까)
numbers.b = 7;
numbers.a = 9;
console.log(numbers.sum);