// 모듈 시스템 이해하기

// const moduleData = require("./math");

// console.log(moduleData.add(1,2));
// console.log(moduleData.sub(1,2));

// const {add, sub} = require("./math");

// package.json에서 main : Commonjs -> module로 변경

import mul from "./math.js"; // multiply 이름을 변경 가능
import {add, sub} from "./math.js";
// import mul, {add, sub} from "./math.js"; // 같은 경로이면 합치는 거 가능

console.log(add(1,2));
console.log(sub(1,2));
console.log(mul(2,3));

// console.log(moduleData);