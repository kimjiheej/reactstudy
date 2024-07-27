// 1. 배열의 구조 분해 할당 

let arr = [1,2,3]; 

let [one,two, three, four = 4] = arr; // arr 배열에 있는 것들이 one two three 변수에 할당이 되게 된다. 
console.log(one, two, three, four);

// 2. 객체의 구조 분해 할당 

let person = {
    name : "이정환", 
    age : 27, 
    hobby : "테니스"
}; 

let {
    age : myAge, 
    hobby, 
    name,
    extra = "hello",
} = person; 

// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법 ! 

const func = ({name,age,hobby,extra}) => { // 객체를 넘겼을 때에만 사용할 수 있다 
    console.log(name,age,hobby,extra); 
}

func(person);  







