var obj = {
    a : 1,
    b : function bb(){
        console.log(this);
    }
};

obj.b();