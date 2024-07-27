const promise = new Promise((resolve,reject) => {

    // 비동기 작업 실행하는 함수 
    // executor 


    setTimeout(() => {
        const num = 10; 

        if(typeof num === "number") {
            resolve(num + 10); 
        } else {
            reject("num이 숫자가 아닙니다"); 
        }
}, 2000)}); 

 



