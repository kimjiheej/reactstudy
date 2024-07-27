function funcA() {
    console.log("funcA"); 
}

let varA = funcA; 
console.log(varA);  // 함수 자체가 출력이 되게 된다. 
// javascript 에서는 함수도 문자나 숫자 같이 하나의 값으로출력이 된다. 

varA(); 

let varB = function funcB() {
    console.log("funcB"); 
}

varB(); // 이런식으로 호출할 수도 있다. 

// 변수의 이름으로 불러야 한다. 생성할 때에 전혀 문제가 되지 않는다 
// 익명함수라고 한다. 
// 정리하자면 함수 선언문을 이용하여 만들지 않고 값으로 함수를 생성하는 방식을 
// 함수 표현식이라고 한다. !! 
// 이런 함수들은 값으로써 취급이 되기 때문에 함수 선언문으로 만든 것과는 달리 
// 호이스팅의 대상이 되지 않는다. 

// 향후에 배우게 될 콜백 함수의 개념에서 사용되게 된다 !! 

// 2. 화살표 함수 

let varC = () => 1; // 그냥 1이라는 값을 반환시켜주는 아이이다 !! 
// 이때에 매개변수가 필요하다 

let varD = (value) => value + 1; // value 가 변수로 들어오고 value + 1 을 반환하게 된다 

let varF = (value) => {
    console.log(value); 
    return value + 1;
}; 

console.log(varD(10)); 