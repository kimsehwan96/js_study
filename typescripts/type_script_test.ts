

//////////// class //////

interface PersonTest{
	firstName: string;
	lastName: string;
}

class Student implements PersonTest{ //인터페이스는 implements !
	fullName: string;
	constructor(public firstName, public middleInital, public lastName){
		this.fullName = firstName + " " + middleInital + " " + lastName
	}
}

function greeter(student: Student){
	return "Hello, " + student.firstName + " " + student.lastName;
}

let user = new Student("Kim", "se", "hwan"); //이상한 예제이긴함. 인터페이스의 변수명과 일치하니까 돌아가네. middleInital은 누락됨

console.log(greeter(user)); //좋은 예시는 아니다.