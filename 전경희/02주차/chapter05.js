// 1. Number Type
let num1 = 27;
let num2 = 1.5;
let num3 = -20;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2); // 모듈러 연산

let inf = Infinity; // 양의 무한대
let mInf = -Infinity; // 음의 무한대

let nan = NaN; // not a number 

// 2. Strong Type
let myName = "이정환";
let myLocation = "목동";
let introduce = myName + myLocation;

let introduceText = `${myName}은 ${myLocation}에 거주합니다.`; //백틱 사용
// console.log(introduceText);
// 템플릿 리터럴 문법

// 3. Boolean Type
let isSwitch0n = true;
let isEmpty = false;

// 4. Null Type (아무것도 없다)
let empty = null;
// 직접 명시적으로 직접 개발자가 할당을 해준 값

// 5. Undefined Type
let none;
console.log(none);
// 미처 초기화하지 못했거나 존재하지 않는 값을 불러오려고 할 때

