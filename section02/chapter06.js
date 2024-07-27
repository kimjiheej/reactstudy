// 6가지의 요소 조작 메서드 

// 1. push 
// 배열의 맨 뒤에 새로운 요소를 추가하는 메서드

let arr1 = [1,2,3]; 
const newLength = arr1.push(4,5,6,7); 


console.log(arr1);
console.log(newLength); 

// 2. pop 
let arr2= [1,2,3]; 
const popedItem = arr2.pop(); 

console.log(popedItem); 
console.log(arr2); 

// 3. shift 메서드 
// 

let arr3 = [1,2,3]; 
const shiftedItem = arr3.shift(); 
console.log(shiftedItem, arr3); 

// 4. unshift 
let arr4 = [1,2,3]; 
arr4.unshift(0); 
console.log(arr4); 

let arr5 = [1,2,3,4,5]; 
// slice 할 수가 있다. 

let sliced2 = arr5.slice(2); 

arr5.slice(2,5);// 이렇게 하면 4까지 잘라내게 된다 
console.log(sliced2); 
console.log(sliced); 
console.log(arr5); 

// 뒤에서부터 잘라내고 싶다 

let sliced3 = arr5.slice(-1); 
console.log(sliced3); 

// 6. concat 
// 두개의 서로 다른 배열을 이어 붙여서 새로운 배열을 반환한다. 

let arr6 = [1,2]; 
let arr7 = [3,4]; 

let concatedArr = arr6.concat(arr7); 
console.log(concatedArr); 


