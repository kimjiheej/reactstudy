// 배열은 여러 개의 값을 순차적으로 담을 수 있는 자료형이다. 

// 실습과 함께 배열에 대해서 알아보자 !! 

let arrA = new Array(); 

let arrB = []; 

let arrC = [1,2,3]; 

console.log(arrC); 

// 배열에 배열도 넣을 수가 있다 !! 

// 생성과 동시에 저장할 값에 대해서도 생각해 볼 수 있다 !! 

// 2. 배열 요소 접근에 대해서 살펴보자 !! 

let item1 = arrC[0]; 
let item2 = arrC[1]; 
arrC[0] = "hello"; 
console.log(arrC); 
console.log(item1, item2); 




