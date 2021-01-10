const dog = {
    name: '멍멍이',
    sound: '멍멍!',
    say() {
        console.log(this.sound); //dog라는 객체를 this가 의미한다.
    }
};

dog.say();

//화살표 함수는 this를 객체 자신으로 바인딩 하지 않는다.


const cat = {
    name : "야옹이",
    sound: "야옹 !",
};

cat.say = dog.say; //cat.say는 dog.say인데 저건 this.sound를 출력하는거다.
cat.say(); //this.sound를 출력하므로 cat의 sound를 출력하게 된다.

const catSay = cat.say;

catSay(); //cat의 say함수를 등록은 해줬지만, this가 무엇인지 모르기 떄문에 undefined 출력

