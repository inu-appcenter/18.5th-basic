let arrA = new Array(); // 배열 생성자
let arrB = []; // 배열 리터럴(대부분 사용)

let arrC = [
  1,
  2,
  3,
  true,
  "hello",
  null,
  undefined,
  () => {},
  {},
  [],
];
let item1 = arrC[0]; // 1
let item2 = arrC[1]; // 2

arrC[0] = "hello";

console.log(arrC);