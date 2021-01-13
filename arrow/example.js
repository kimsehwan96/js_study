// const pow = x => x * x ;

// console.log(pow(10));

const arr = [1, 2, 3];

const pow = arr.map(x => x * x);
//이 pow 는 arr의 모든 요소 를 순회하면서 x * x를 저장한다.

console.log(pow);

// 일반 함수의 this는 본인이 속한 객체를 나타내는데
//화살표 함수의 this는 자기 바로 위 렉시컬 스코프 가리킴

let group = {
    title: "1조",
    students: ['kim', 'park', 'lee'],

    showList() {
        this.students.forEach(
            //인자로 받는것(각 원소)를 stduent라고 정의했고
            //여기서 this는 showList가 아니라 group을 가리킨다.
            student => console.log(this.title + ': ' + student)
        );
    }
};

group.showList();