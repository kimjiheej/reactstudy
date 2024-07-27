// 콜백 함수란 ?
// 자신이 아닌 다른 함수에 인수로써 전달된 함수를 의미한다 

function main(value) {
     console.log(1); 
     console.log(2); 
     value(); 
     console.log("end"); 

}

main( () =>  {
    console.log("i am sub"); 
}); 

// 이렇게 해서 콜백 함수에 대해서 살펴보았다. 
// 

// i am sub ;; 
// callback 이라는 것이 뒷전에 실행되는 혹은 나중에 실행되는 것이라고 한다 
// sub 함수를 당장 실행되는 것이 아니라 mai 함수가 알아서 실행하게 된다. 
// 그래서 callback 함수이다. 

// 2. 콜백함수의 활용 

function repeat(count) {
    for(let idx = 1; idx <=count; idx++) {
        console.log(idx); 
    }
}


repeat(5); 

// 다른 기능을 하는 함수를 만들어보자 !! 

function repeatDouble(count) {
    for(let idx = 1; idx<=count; idx++) {
        console.log(idx * 2); 
    }
}

function repeatTriple(count) {
    for(let idx = 1; idx<=count; idx++) {
        console.log(idx * 3); 
    }
}



// 콜백함수의 활용 

function repeat(count, callback) {
    for(let idx = 1; idx <=count; idx++) {
        callback(idx); 
    }
}

repeat(5, function(idx) {
    console.log(idx); 
})

// 이렇게 이해를 하면 된다 !! 
// repeat double 이나 triple 을 수행할 수가 없다. 
repeat(5); 
repeatDouble(5);

repeat(5, idx => {
    console.log(idx * 2); 
})


let var2 = () => {


    
}

let var3 = (value) => value+1; 




