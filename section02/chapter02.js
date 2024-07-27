// 단락 평가란 ? 

function returnFalse() {
    console.log("False 함수"); 
    return false;
}

function returnTrue() {
    console.log("True 함수"); 
    return true;
}

console.log(returnFalse() && returnTrue()); 

// 단락 평가 활용 사례 

function printName(person) {

    const name = person & person.name; 
    // 만약 person 이 undefined 라면 아예 접근하지 않는다 
    console.log(name || "person 의 값이 없음"); 
}

personName(); 


