// for (let i:number = 0; i < 10; i ++){
//     console.log(i);
// }

// for(let i:number = 10; i >= 0; i--){
//     console.log(i);
// }

class TestClass {
    testArray: number[];
    len: number;
    constructor(testArray: number[]){
        this.testArray = testArray;
        this.len = this.testArray.length;
    }

    forLoop():void {
        
        for(let i = 0; i < this.len; i++){
            console.log(this.testArray[i]);
        }
    }
}

const ary: number[] = [1,2,3,4,5,6,7];

let tc = new TestClass(ary);

tc.forLoop();

