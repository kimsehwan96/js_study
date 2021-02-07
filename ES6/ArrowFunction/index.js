'use strict'

const add = (var1, var2) => (var1 + var2);

console.log(add(1,2));


API.prototype.get = function(resource) {
    var self = this;
    return new Promise(function(resolve, reject){
        htpp.get(self.uri + resource, function(data) {
            reslove(data);
        })
    })
}

//위 코드를 리팩토링 해보자 (this 바인딩)

API.prototype.get = (resource) => {
    new Promise((resolve, reject) => {
        http.get(this.uri + resource, (data) => {
            reslove(data);
        });
    });
};

//arrow function에서의 this 바인딩은, 자신의 상위 스코프에 바인딩 된다.