// 1. Number Type
let num1 = 23;
let num2 = 1.5;
let num3 = -20;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2); // 나머지

let inf = Infinity;
let mInf = -Infinity;

let nan = NaN; // 수치 연산 실패 결과값
console.log(1 * "Hi");

// 2. String Type
let myName = "이승민";
let myLocation = "송도";
let introduce = myName + myLocation;
console.log(introduce);
let introduceText = `${myName}은 ${myLocation}에 거주합니다`; // 템플릿 리터럴 문법
console.log(introduceText);

// 3. Boolean Type
let isSwitchOn = true;
let isEmpty = false;

// 4. NULL Type (아무것도 없다)
let empty = null;
console.log(empty);

// 5. Undefined Type
let none;
console.log(none);

// null과 undefined 차이
// null : 프로그래머가 직접 선언
// undefined : 초기화하지 않았거나 존재 X
