// 조건문이란 ? 
// 특정 조건을 만족했을 때에만 실행되는 코드를 작성하기 위한 문법이다 !! 

// live server 만들어주기 

// 1. if 조건문 (if 문 )

let num = 10; 

if(num >= 10) {
    console.log("num 은 10 이상입니다."); 
    console.log("조건이 참 입니다"); 
}

// 중괄호 안에 여러 개의 코드를 작성할 수 있다.

// 1. if 조건문 (if 문)


if(num >=10) {
    console.log("num 은 10 이상입니다"); 
    console.log("조건이 참 입니다");
} else if(num >=5) {
    console.log("num 은 5 이상입니다");
} else {
    console.log("조건이 거짓입니다");
}

// else if 로 끝나게 되면 당연히 오류가 발생하게 된다 !! 
// if 문에 대해서 살펴보게 됨 

// 2. Switch 문 
// if 문과 기능 자체는 동일하게 된다. 조건에 따라 똑같지만 
// 다수의 조건을 처리할 때에 if 보다 더욱 직관적이게 된다. 

let animal = "owl"; 



switch (animal) {
    case "cat" : {
        console.log("고양이");
        break;
    }
        case "dog" : {
            console.log("강아지");
            break;
        }
            case "bear" : {
                console.log("곰");
                break;
            }
                case "snake": {
                    console.log("뱀");
                    break;
                }
                    case "tiger": {
                        console.log("호랑이"); 
                        break;
                    }

                    default: {
                        console.log("그런 동물은 전 모릅니다"); 
                    }
}











