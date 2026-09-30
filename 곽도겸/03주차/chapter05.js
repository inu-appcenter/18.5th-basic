//1. 객체 타입 주의사항 1. 의도치 않은 값 수정
// let o1 = {name : "곽도겸"};//얕은 복사
// let o2 = o1;
// o2.name = "홍길동";

// let o3 = {name : "곽도겸"};//깊은 복사
// let o4 = {...o3};
// o4.name = "홍길동";

//객체 타입 주의사항 2. 객체간의 비교는 참조값 기준이다
let o1 = {name : "곽도겸"};
let o2 = o1;
let o3 = {... o1};
console.log(o1 === o2); //true 얕은 비교
console.log(o1 === o3); //false
console.log(JSON.stringify(o1)===JSON.stringify(o1));//깊은 비교