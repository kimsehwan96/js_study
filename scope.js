// var 함수 스코프

var a = 0; 

(function() {
    a++;
    console.log(a);
})(); //즉시 실행 함수
    // a는 1인 상태로 출력된다

console.log(a); //당연히 사용 가능


(function() {
    var b = 0;
    console.log(b);
})();


// b++; 에러 발생 <- var는 함수 스코프이므로.

// console.log(b);