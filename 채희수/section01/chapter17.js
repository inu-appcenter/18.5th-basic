// 1. 배열 생성
let arrA = new Array(); // 배열 생성자
let arrB = []; // 배열 리터럴 (대부분 사용)

let arrC = [
  1,  // 숫자 (Number)
  2, 
  3, 
  true, // 불리언 (Boolean)
  "hello", // 문자열 (String)
  null, // null
  undefined, // undefined
  () => {}, // 화살표 함수
  {}, // 객체 (Object)
  [], // 배열 (Array)
];

console.log(arrC);

// 2. 배열 요소 접근
let item1 = arrC[0];
let item2 = arrC[1];

console.log(item1, item2); // 1, 2

arrC[0] = "hello";
console.log(arrC); // 0번째가 hello로 바뀜