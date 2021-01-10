function getGrade(score){
    if (score === 100){
        return 'A+';
    }
    else if (score >= 90){
        return 'A';
    }
    else if (score === 89){
        return 'B+';
    }
    else if (score >= 80){
        return 'B';
    }
    else {
        return 'F';
    }
}


const grade = getGrade(100);

console.log(grade);