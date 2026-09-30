// 1. 묵시적 형 변환
// -> 자바스크립트 엔진이 알아서 형 변환 하는것

let num = 10;
let str = "20";

const result = num + str;
// 묵시적: num이 string으로 형변환이 됨
// 암묵적 또는 묵시적으로 자동으로 변환해줌

// 2. 명시적 형 변환
// -> 프로그래머 내장함수 등을 이용해서 직접 형 변환을 명시
// -> 문자열 -> 숫자
let str1 = "10"; 
let strToNum1 = Number(str1);

let str2 = "10개";
let strToNum2 = parseInt(str2);
// 숫자가 앞쪽으로 나와있어야 한다. 

// -> 숫자 -> 문자열
let num1 = 20;
let numToStr1 = String(num1);

console.log(numToStr1 + "입니다");
