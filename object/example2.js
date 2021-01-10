const ironMan = {
    name : "Tony",
    actor : "Robert",
    alias : "iron man"
};

const captainAmerica = {
    name : "steven",
    actor : "khris",
    alias : "Captian America"
};

function print(hero){
    const {alias, name, actor } = hero; //객체 구조 분해. hero.라는 객체의 이름(prefix)를 걷어 낼 수 있다!
    const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.`;
    console.log(text);
}

function print2({alias, name, actor }){ //인자에서 이미 비구조화를 시킬 수 있다.

    const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.`;
    console.log(text);
}

print(ironMan);
print2(ironMan);