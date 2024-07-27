let obj1 = new Object(); 
let obj2 = {}; 

// 객체 프로퍼티 객체 속성!! 
let person = {
    name : "이정한", 
    age: 27, 
    hobby : "테니스", 
    job: "FE Developer", 
    extra : {},  // 객체가 들어가게 된다 
    10 : 20, 
    "like cat": true 
}; 


// 문자열이나 숫자가 들어갈 수 있다 

// 3. 객체 프로퍼티를 다루는 방법 
// 3.1 특정 프로퍼티에 접근하는 방법 
// (점 표기법, 괄호 표기법)

let name = person.name; // 객체 이름에 점을 찍는다. 
console.log(name); 

// 이런식으로 중간 line 이 그어지게 된다면 ~~ 
// typescript 와 관련된 경고 사항이다 ~~ 

// undefined 가 반환이 되게 된다 ~~ 

let age = person["age"]; // 접근하고자 하는 key 를 명시하게 된다. 
console.log(age); 

// 점 표기법과 거의 똑같다라고 생각하면 된다 !! 

let property = "hobby"; 
let hobby = person[property]; 
console.log(hobby); 

// 3-1 새로운 프로퍼티를 추가하는 방법 

person.job = "fe developer"; 
person["favoriteFood"] = "떡볶이"; 

//. 표기법이나 괄호 표기법을 사용해서 추가해주면 된다 !! 

console.log(person); 

// 객체로 만들어지게 된다 !!

// 3.3 프로퍼티를 수정하는 방법 
person.job="educator"; 
person['favoriteFood'] = "초콜릿"; 

// 3.4 프로퍼티를 삭제하는 방법 
delete person.job; // 삭제될 객체를 보여준다 
console.log(person); 


// 3.5 프로퍼티의 존재 유무를 확인하는 방법 
let result = "name" in person; 

// 오른쪽에 있는 객체 안에 있냐 없냐를 물어보게 된다. 

let result2 = "cat" in person;  // 프로퍼티를 체크하게 된다 !! 

