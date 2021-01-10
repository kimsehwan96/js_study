// 블록스코프

var c = 0;

{
    c++;
    console.log(c);
}

{
    var d = 0;
    console.log(d);
}

console.log(d); //let이나 const였다면 문제가 되는데, var는 이렇게 블록스코프 밖으로 나올 수 있다.
//var는 오직 함수 스코프에서만 분리된다.

