// scope 란 ? 

// 전역 스코프와 지역 스코프로 나뉘어지게 된다 
// 전역은 전체 영역이다. 
// 해당 변수는 전체 영역에서 접근이 가능하다는 의미이다 ~ 

let a = 1; // 전역 스코프 

function funcA() {
    let b = 2; 
    console.log(a); 

    function funcB() {
        
    }
}

funcA();
console.log(b); // is not defined 로 나오게 된다 

// 어디서든 접근할 수 있다. 

funcA(); 

if(true) {
    let c = 1; 
}

// block 을 똑같이 만들기 때문에 block 안은 다 외부 scope 이다. 
// 똑같이 오류가 발생하게 된다. 

for(let i = 0; i<10; i++) {
    let d  = 1; 
}

console.log(d); // 쉽게 생각하자면 반복문이나 조건문 들은 지역 scope 를 갖게 된다. 
// 밖에서는 접근할 수 없다. 

console.log(i); 


// 조건문이나 반복문안에서는 지역 scope 를 갖지 않는다. 


