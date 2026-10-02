//console.log("안녕 Node.js");


//내보낸 함수를 가져오기
//const mouduleData = require("./math");
import mul, { add, sub } from "./math.js";

/*
console.log(mouduleData.add(1,2));
console.log(mouduleData.sub(1,2));
*/ 

// console.log(add(1,2));
// console.log(sub(1,2));
// console.log(mul(2,3));

// 라이브러리를 불러올때는 이름만 
import randomColor from "randomcolor";

const color = randomColor();
console.log(color);
