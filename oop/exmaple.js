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
