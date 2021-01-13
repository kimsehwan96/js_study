const dog = {
    name : '멍멍이',
    sound : '멍멍',
    say: function(){
        console.log(this.sound);
    }
}


dog.say();

const cat = {
    name: '야옹이',
    say : () => {
        console.log(this);
    }
}

cat.say();