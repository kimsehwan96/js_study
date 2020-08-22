$(document).ready(function(){
    $.ajax({
        url:"https://q7vbvxe4cjdwnl7ke62ja5wany.appsync-api.ap-northeast-2.amazonaws.com/graphql",  //전송페이지, 서버주소
        headers: {
            'X-API-KEY' : "da2-44t3qsf73zgzlkv6p62vjbf2oe"
          },
        type:"post",  //get, post 방식
        data: JSON.stringify({
        query: "query{\n  listCustomer{\n    customerId\n    img\n    name\n    birthday\n    gender\n    job\n  }\n}",
        variables: {}
        }),
        dataType:"json",  //요청한 데이터 형식(html,xml,json,text,jsonp)
        success:function(data){  //data:서버쪽에서 날라오는 데이터
            console.log("this is received data")
            console.log(data.data.listCustomer)
            $.each(data.data.listCustomer,function(key,value){
                console.log(key, value)
                    $("#userData").append("<h1>"+value.name, "</h1>");
                    $("#userData").append("<h3>"+value.gender+"</h3>");
                    $("#userData").append("<h3>"+value.birthday+"</h3>");
                    $("#userData").append("<h3>"+value.job+"</h3>");
                    $("#userData").append("<img src = "+value.img+">"+"</img>");
                    
                });
        },
        error:function () {
            console.log("error occuerd");
            console.log(JSON.stringify(query))
        },
    })
});