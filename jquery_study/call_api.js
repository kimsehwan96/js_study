$(document).ready(function(){
    $.ajax({
        url:"http://ksh96.com/graphql",  //전송페이지, 서버주소
        type:"post",  //get, post 방식
        data:"body_data", // body에 실을 데이터.
        dataType:"json",  //요청한 데이터 형식(html,xml,json,text,jsonp)
        success:function(data){  //data:서버쪽에서 날라오는 데이터
            //전송에 성공하면 실행될 코드;
        },
        error:function () {
            //전송에 실패하면 실행될 코드;
        }
    });
});

