class Stack {
    data: number[];
    top: number;
    constructor() {
      this.data = [];
      this.top = 0;
    }
  
    push(element): void {
      this.data[this.top] = element;
      this.top += 1;
    }
  
    length() :number{
      return this.top;
    }
  
    peek() :number{
      return this.data[this.top - 1];
    }
  
    isEmpty() :boolean{
      return this.top === 0;
    }
  
    pop() :number{
      if (this.isEmpty() === false) {
        this.top = this.top - 1;
        return this.data.splice(-1)[0];
      }
    }
  
    print() :void{
      this.data.map((element) => {
        console.log(element);
      });
    }
  
    reverse() :void{
      this._reverse(0);
    }
  
    // private method
    _reverse(index) :void{
      if (index < this.top - 1) {
        this._reverse(index + 1);
      }
      console.log(this.data[index]);
    }
  }