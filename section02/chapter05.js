// 순환이란 ? -> 배열, 객체에 저장된 여러개의 값에 순서대로 하나씩 접근 

// 반복문을 위한 순회. 배열 보기 

let arr = [1,2,3]; 

// 1.1 배열 인덱스 
for(let i =0; i< arr.length; i++ ){
    console.log(arr[i]); 
}

let arr2 = [4,5,6,7,8]; 


for(let i=0; i<arr2.length; i++) {
    console.log(arr2[i]); 
}

// 1.2 for of 반복문 
for(let item of arr){
    console.log(item); 
}

let person = {
    name : "이정환", 
    age: 27, 
    hobby : "테니스"
}; 

// 2.1 Object.keys 사용 
// -> 객체에서 key 값들만 뽑아서 새로운 배열로 반환해준다. 

let keys = Object.keys(person); 
// person 객체의 property 의 key 값들만 배열로 만든다 

console.log(keys); 

for(let i=0; i<keys.length; i++) {
    console.logs(keys[i]); 
}

for(let key of keys){
    const value = person[key]; 
    console.log(key, value); 
}

let values = Object.values(person); // person 객체의 values 가 배열로 묶인다. 
console.log(values); 

for(let value of values) {
    console.log(value); 
}

// 2.3 for in 

for(let key in person) {
    const value = person[key]; 
    console.log(key, value); 
}









