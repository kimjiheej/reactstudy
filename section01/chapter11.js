// 함수 선언 

function greeting () { // 아무것도 출력되지가 않는다. 
    console.log("안녕하세요!"); 
}

console.log("호출 전"); 

greeting();  // 이렇게 해야 그제서야 함수가 실행이 되게 된다 

// 함수를 호출할 때에는 !! 소괄호를 무조건 호출해줘야 한다 ~~ 
// 소괄호와 함께 무조건 호출해야 함 ㅎㅎ 


console.log("호출 후"); 


// 조금 더 실용적인 함수를 만들어보자 ~~ 


// 굳이 쌩으로 전달할 필요가 없다 !!. 
// 굳이 선언할 필요가 없다 !! 
// 그냥 width.height 로 전달하면 됩니다~~ 
// 함수 
function getArea(width, height) {

    function another() { // 중첩 함수 
        console.log("another"); 
    }

    another(); 
    let area = width * height; 
    return area; 
    console.log("hello"); // return 후에 하면 실행 되지 않는다. 
}

let area1 = getArea(10,20);  // area 에 들어가게 된다. 
console.log(area1); 
getArea(); 

// 동적으로 getArea 함수를 호출 할 때마다 우리가 넘겨준 값으로 넓이를 구해라 
// 반드시 써줘야 했었던 

getArea(10,20); 

let area2 = getArea(30,20); 
console.log(area2); 

// 특수한 함수의 변수들을 매개변수라고 한다. 
// 최종적으로 정리하자면 10 과 20이라는 인수를 전달해주게 되면 순서대로 각각 들어가게 된다. 
// 내부에서 저런 식으로 값을 사용할 수가 있게 된다 

getArea(30,20); 
getArea(120,200); 






