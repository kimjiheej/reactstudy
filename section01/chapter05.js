// 1. Number Type 
let num1 = 27; 
let num2 = 1.5; 
let num3 = -20; 

console.log(num1 + num2); 
console.log(num1 - num2); 
console.log(num1 * num2); 
console.log(num1 / num2); 
console.log(num1 % num2); 

// 모듈러 연산 

let inf = Infinity; 
let mInf = -Infinity;

let nan = NaN; 

console.log(1*"hello");  // 말도 안되는 연산의 결과이다. 
// 연산에 실패하면 Nan 으로 나오게 된다. 


// 2. String Type 
let myName = "이정환"; 
let myLocation = "목동"; 
let introduce = myName + myLocation; 

let introduceText = `${myName} 은 ${myLocation} 에 존재합니다`;
// 문자열을 이어붙인 것이 저장이 되게 된다. 
console.log(introduceText); 
// 백틱이라고 한다. 

// 템플릿 리터럴 문법 

// 3. Boolean Type 
let isSwitchOn = true; 
let isEmpty = false; 

// 4. Null Type (아무것도 없다 !!) 
let empty = null;  // 실제로 직접 명시적으로 할당을 해주어야 하는 값이다. 

// 5. Undefined Type 
let none; 
console.log(none); 






