console.log("안녕 Node.js");
// node index.js 명령어를 터미널에 입력하여 실행.
// 이 파일의 명령어가 실행되는 것을 확인할 수 있다.

// 만약 다른 폴더 내에 (지금처럼 src 폴더에) 실행하고자 하는 파일이 있다면 경로를 명시한다.
// node src/index.js

// 패키지 스크립트를 사용하여 start 스크립트로 이를 실행할 수 있도록 설정,
// npm run start 명령으로 이 파일을 실행할 수 있다.

// 3-4) 모듈 시스템 이해하기 추가 분량

// 1. CommonJS
// 내장 함수 require를 이용하여 모듈의 경로를 인수로 전달.
// 1) 변수에 객체로 한 번에 받기
// const moduleData = require("./math");
// console.log(moduleData.add(1, 2));
// console.log(moduleData.sub(1, 2));

// 2) 객체의 구조 분해 할당을 이용해 필요한 것만 꺼내오기
// const { add, sub } = require("./math");
// console.log(add(1, 2));
// console.log(sub(1, 2));

// 2. ES Module
// import { (가져올 것) } from "./(코드 파일명).js"
import { add, sub } from "./math.js";

console.log(add(1, 2));
console.log(sub(1, 2));

// 기본값을 불러올 때는 중괄호 없이 불러오도록 한다.
// 이름도 맘대로 설정 가능.
import mul from "./math.js"; // 이름을 mul로 지정해 불러옴

console.log(mul(2, 3));

// 3-5) 라이브러리 사용하기
import randomColor from "randomcolor";

const color = randomColor();
console.log(color);
