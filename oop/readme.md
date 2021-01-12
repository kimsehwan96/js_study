# 객체지향 In js

- 클래스로부터 객체의 인스턴스가 생성될 때는 클래스의 생성자 함수가 호출된다.
- 클래스에서 객체 인스턴스가 생성되는 일련의 과정을 인스턴스화 라고 한다.
- 객체의 인스턴스는 클래스를 통해 만들어진다.

## 생성자와 객체 인스턴스

- 생성자 함수라고 불리는 함수를 이용해 객체 생성 가능.

- 생성자로부터 새로운 객체 인스턴스가 생성되면, 객체의 핵심 기능이 프로토타입 체인에 의해 연결된다.

```js
function createNewPerson(name) {
    var obj = {};
    obj.name = name;
    obj.greeting = function (name) {
        console.log("Hi ! I am "+ this.name + ' !');
    }
    return obj; //빈 객체를 생성하여 프로퍼티와 메서드를 박아넣고 리턴한다.
}

var salva = createNewPerson("salve");
salva.greeting();

//위는 세련되지 않은 코드

function Person(first, last, age, gender, interests) { //생성자 함수
    this.name = {
      'first': first,
      'last' : last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.bio = function() {
        let genderVar;
        if (this.gender === 'male'){
            genderVar = 'He' //this.genderVar 라고 선언하면 bio의 프로퍼티.
        }
        else if (this.gender === 'female'){
            genderVar = 'She'
        }
      console.log(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old.' + genderVar +  ' likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
    };
    this.greeting = function() {
      console.log('Hi! I\'m ' + this.name.first + '.');
    };
  } 

//생성자 함수는 관습적으로 첫 글자를 대문자로

var person1 = new Person('Bob');
var person2 = new Person('Sarah');

var person1 = new Person('Bob', 'Smith', 32, 'female', ['music', 'skiing']);

console.log(person1['age'])
person1.bio();


var person2 = Object.create(person1); //person1의 객체를 person2에도 생성한다.

```

## 프로토 타입 기반 언어 ?

- 모든 객체들이 메소드와 속성들을 상속받기위한 템플릿으로서 프로토타입 객체를 가진다는 의미.
- 프로토타입 객체도 또 다시 상위 프로토타입 객체로부터 메소드와 속성을 상속 받을 수도 있고 그 상위 프로토타입 객체도 마찬가지이다.
- 이를 프로토타입 체인이라고 부른다.

- 객체 인스턴스와 프로토타입 간에 연결이 구성되며 이 연결을 따라 프로토타입 체인을 타고 올라가며 속성과 메소드를 탐색한다.