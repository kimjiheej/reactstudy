// 1. null 병합 연산자 
// -> 존재하는 값을 추려내는 기능 
// null, undefined 가 아닌 값을 찾아내는 연산자 

let var1; 
let var2 = 10; 
let var3 = 20; 

let var4 = var1 ?? var2; 
let var5 = var1 ?? var3; 
let var6 = var3 ?? var2; 

let userName = "이정현"; 
let userNickName = "Winterlood"; 

let displayName = userName ?? userNickName; 

// 2. typeof 연산자 
// -> 값의 타입을 문자열로 반환하는 기능을 하는 연산자 ㅇ

let var7 = 1; 
var7 = "hello"; // 변수의 타입이 고정되어 있지 않다.
var7 = true;  

let t1 = typeof var7;  // typeof 는 문자열로
console.log(t1); 

// 3. 삼항 연산자 
// -> 항을 3개 사용하는 연산자 

// -> 조건식을 이용해서 참 거짓을 다르게 반환한다. 

let var8 = 10; 

// 요구사항 : 변수 res 에 var8 의 값이 짝수 -> "짝" 홀수 -> "홀"

// 조건에 따라 다른 값이 들어오게 되면 

let res = var8 % 2 === 0 ? "짝수" : "홀수"; 

// 참이 먼저고 그 다음이 거짓으로 나오게 된다 
// 만약에 참이면 짝수를 저장하고 아니면 홀수를 저장해준다. 

console.log(res); 


