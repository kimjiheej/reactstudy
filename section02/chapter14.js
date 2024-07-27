// promise 를 직관적으로 사용할 수 있도록 해준다 

// async 어떤 함수를 비동기 함수로 만들어준다 
// 함수가 promise 를 반환하도록 변환해준다 

async function getData() {
    return new Promise((resolve,reject) => {
        setTimeout(()=> {
            resolve ({
                name : "이정환", 
                id: "winterload", 
            });
        }, 1500); 
    }); 
}

// 비동기 함수로 바뀌어서 이 객체를 결과값으로 return 해주는 함수로 변한다 

console.log(getData()); // promise 로 반환이 되게 된다. 

// 만약에 async 가 붙은 함수가 

// await 이라는 키워드와 함께 ~ 
// aync 함수 내부에서만 사용이 가능한 키워드이다. 

// 비동기 함수가 다 처리되기를 기다리는 역할이다. 

async function printData() {
  const data =   await getData(); 
  console.log(data); 
}

printData(); 

