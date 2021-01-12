let person = {
    name: {
        first: 'Bob',
        last: 'smith'
    },
    age: 32,
    gender: 'male',
    interests: ['music', 'sking'],
    bio: function() {
        console.log(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
    },
    greeting: function() {
        console.log('Hi! I\'m ' + this.name.first + '.');
      }
};

person.bio();
person.greeting(); //객체의 메서드 실행

//person이라는 객체에 name, age와 같은 프로퍼티와 bio()같은 메서드를 갖게 되었다.

//괄호 표기법

console.log(person['age']);
console.log(person['name']['first']);


//객체의 멤버를 갱신하거나, 설정하는것이 가능하다 !

person.age = 45;

console.log(person.age);

//완전히 새로운 프로퍼티나 메서드를 생성 하는 것도 가능하다.

person.sayhello = () => console.log("Hello !");
//person.sayhello() <- 이렇게 새로 할당하는건 노놉. 할당이 아니라 호출하는거니까
person['eyes'] = 'hazel';
//새로운 메서드와 프로퍼티를 할당

person.sayhello();

//객체 내부에서의 this는 객체 자신을 가리킨다.