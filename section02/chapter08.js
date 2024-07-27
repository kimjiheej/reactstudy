// 

// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 변환한다. 

let arr1 = [
   {name : "이정환", hobby : "테니스"},
   {name : "김효빈", hobby : "테니스"},
   {name : "홍길동", hobby : "독서"}
];

const tennisPeople = arr1.filter((item) => {
    if(item.hobby === "테니스")
        return true; 
}); 

console.log(tennisPeople); 

// 2. map 
// 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값들을 새로운 배열로 반환한다. 

let arr2 = [1,2,3]; 
const mapResult1 = arr2.map((item, idx, arr) => {
 
    return item * 2; 
}); 

console.log(mapResult1); 

let names = arr1.map((item) => item.name); 
// item.name 값들만 모아서 배열로 만들어준다 

console.log(names); 

let arr3 = ["b","a","c"]; 
arr3.sort(); // 사전순으로 요소들을 정렬해주게 된다. 
console.log(arr3); 

// 3. sort 
let arr4 = [10,3,5]; 

arr3.sort((a,b) => {
    if (a>b) {
        // b 가 a 앞에 와라 

        return 1; 
    } else if (a<b) {
        // a 가 b 앞에 와라 
        return -1; 
    }

}); 

console.log(arr3); 


// 4. toSorted 
// 정렬된 새로운 배열을 반환하는 메서드 

let arr5 = ["c","a","b"]; 
const sorted = arr5.toSorted()
; 

console.log(arr5); 
console.log(sorted); 

// 5. join 
let arr6 = ["hi","im","winterload"]; 

const joined = arr6.join(); 




