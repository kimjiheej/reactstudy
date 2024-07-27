// 1. Date 객체를 생성하는 방법 
let date1 = new Date(); 
let date2 = new Date(1997,1,7,23,59,59); 

// 2. 타임 스탬프 
// 특정 시간이 몇 시간이 지났는지 보여준다 

let ts1 = dtae1.getTime(); 

let date4 = new Date(ts1); 

let year = date1.getFullYear(); 
let month = date1.getMonth(); 
let date = date1.getDate(); 

let hour = date1.getHourse(); 
let minute = date1.getMinutes(); 
let seconds = date1.getSeconds(); 

console.log {
    year,
    month,
    date,
    hour,
    minute,
    seconds;
};

console.log(date1.toDateString()); 
console.log(date1.toLocaleString()); 