// 1. 상수 객체 

const animal = {
    type: "고양이", 
    name : "나비", 
    color : "black"
}; 

animal.age = 2; 
animal.name = "까맣이"; 
delete animal.color; // 삭제 할 수 있다. 

console.log(animal); 

// 상수는 새로운 값을 할당하지 못한다. 

// 2. 메서드 
// -> 값이 함수인 property 를 말한다 

const person = {
    name : "이정환", 
    
    sayHi() {
        console.log("안녕!"); 
    }, 

    }
}; 

person.sayHi(); 
person["sayHi"](); 


