/*
//CJS 
//경로를 인수로 사용해서 모듈 불러오기
const moduleDate = require("./math");

console.log(moduleDate.add(1, 2));
console.log(moduleDate.sub(1, 2));


//객체 구조분해 할당
const {add, sub} = require("./math"); 
console.log(add(1, 2));
console.log(sub(1, 2));


console.log(moduleDate);
*/


/*
//ESM
// import { add, sub } from "./math.js";
// import mul from "./math.js";

import mul, { add, sub } from "./math.js";

console.log(add(1, 2));
console.log(sub(1, 2));
console.log(mul(1, 2));
*/


import randomColor from "randomcolor"; //경로가 아닌 라이브러리 이름명시

const color = randomColor();
console.log(color);


