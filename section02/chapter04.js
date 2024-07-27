// 1. Spread 연산자 
// -> Spread : 흩뿌리다, 펼치다 라는 뜻이다. 
// -> 객체나 배열에 저장된 여러개의 값을 흩뿌려주는 역할이다 !! 

let arr1 = [1,2,3]; 
let arr2 = [4,...arr1,5,6]; // arr1 에 있는 내용을 모두 풀어 헤쳐라 ! 라는 의미임 

// arr1 배열의 값들을 arr2 에 흩뿌려넣고 싶다고 한다면 !! 

// 배열 뿐만이 아니라 객체에도 사용 가능하다 !! 

let obj1 = {
    a : 1, 
    b: 2
}; 

let obj2 = {
    ...obj1,
    c: 3, 
    d:4 
};

console.log(obj2); 

function funcA({p1,p2,p3}) {
    console.log(p1,p2,p3); // 값 자체가 나오게 된다. 
}

funcA(...arr1); 

// 2. Rest 매개변수 
// -> Rest는 나머지, 나머지 매개변수라는 의미이다.

function funcB(one,two,...rest) {
    console.log(rest); // 배열 형태로 인수들이 저장되어 있다. 
    // spread 가 아니라 그냥 rest 이다 
    // rest 매개변수 뒤에는 추가적으로 다른 매개변수를 추가할 수 없다. 
}

funcB(...arr1); 



