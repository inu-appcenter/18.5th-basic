//CJS 모듈 불러오기
const moduleDate = require("./math");  // .js 생략가능

console.log(moduleDate.add(1, 2));
console.log(moduleDate.sub(1, 2));


// 객체 구조분해 할당
const {add, sub} = require("./math"); 
console.log(add(1, 2));
console.log(sub(1, 2));


// ES 
import { add , sub } from "./math.js";

console.log(add(1,2));
console.log(sub(1,2));

// 기본값
import mul from "./math.js"; // 이름 아무렇게 지정해도 불러올수 있음