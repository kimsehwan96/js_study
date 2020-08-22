var obj = {
    a : 1,
    b : function bb(){
        console.log(this);
    }
};

obj.b();

/*
this는 .앞의 것을 의미, 만약 정의되지 않았을 경우 - 바인딩 되지 않았을 경우 - window를 돌려준다.
보통 콜백 함수를 호출하는 경우, 이 this를 어떻게 바인딩 할지는 보통 명시되어 있다.
*/