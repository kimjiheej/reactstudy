// 1. 변수

let age; 
console.log(age);

//let 이라는 키워드와 함께 새롭게 변수를 생성하는 과정을 변수를 선언한다 라고 한다. 
// 초기화 한다라도고 부릅니다. 

age = 30;
console.log(age); 

// let 으로 중복되도록 변수를 선언할 수 없다. 
// let age = 40; 
// 변수에 대한 기본적인 내용을 살펴보았다. 

// 2. 상수 
const birth = "1997.01.07"; 
birth = "123"; 

// 상수는 변할 수 없거나 다시는 변할 수 없다. 값을 변화시키는 것 자체가 불가능하다 !! 

// 3. 변수 명명규칙(네이밍 규칙)
// 변수와 상수 모두 총칭해서 그냥 변수로 부르겠다 !! 

// 3-1. 변수명에는 $,_ 를 제외한 기호는 사용할 수 없다. 
// 3-2. 변수의 이름은 숫자로 시작할 수 없다. 
// let 2name 이라고 할 수가 없다. 

// 3-3. 예약어를 사용할 수 없다. 

let salesCount = 1; 
let refundCount = 1; 
let totalSalesCount = salesCount - refundCount;