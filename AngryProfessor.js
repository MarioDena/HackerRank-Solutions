function angryProfessor(k,a){

    let studentsOnTime = 0;

    for(let i = 0; i < a.length; i++){
        if(a[i] <= 0){
            studentsOnTime++;
        }
    }

    if(studentsOnTime >= k){
        return "NO";
    }
    return "YES";
}



console.log(angryProfessor(3, [-1,-3,4,2]));



function angryProfessorEach(k,a){
    let studentsOnTime = 0;

    a.forEach((x) => {if(x <= 0) studentsOnTime++});

    return (studentsOnTime >= k) ? "NO" : "YES";
}


console.log(angryProfessorEach(3, [-1,-3,4,2]));




function angryProfessorOneLine(k,a){
    return (a.filter((item) => {return item <= 0}).length >= k) ? "NO" : "YES";
}



console.log(angryProfessorOneLine(3, [-1,-3,4,2]));
