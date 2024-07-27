// 1. Falsy 한 값 

let f1 = undefined; 
let f2 = null; 
let f3 = 0; 
let f4 = -0; 
let f5 = NaN; 
let f6 = ""; 
let f7 = 0n; // 아주아주 큰 값이다 ! 

if(!f1) {
    // f1 은 falsy 한 값이 된다. 

    console.log("falsy"); 
}

// 2. Truthy 한 값 
// -> 

let t1 = "hello"; 
let t2 = 123; 
let t3 = []; 
let t4 = {}; 
let t5 = () => {}; 

// 조건식에서 모두 참으로 판명이 난다 ! 
if(t1) {
    console.log("Truthy"); 
}

// 3. 활용 사례 




function printName(person) {
    if(!person) { // null 일 때에는 똑같이 오류가 발생하게 된다
        console.log("person 의 값이 없음"); 
        return;
    }
    console.log(person.name);  // name property 의 값이 출력되게 된다. 
}

let person = {name : "이정환"}; 
printName(person); 




