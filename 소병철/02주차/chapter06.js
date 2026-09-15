// 1-6) 형변환
// 1. 묵시적 형 변환
let num = 10; // Number
let str = "20"; // String
const result = num + str;

console.log(result); // "1020"이라는 문자열이 출력
// Number Type이었던 10이 묵시적으로 문자열로 변환("10"), 문자열끼리의 덧셈이 된다.

// 2. 명시적 형 변환
// 문자열을 숫자로 변환한다고 할 때:
let str1 = "10";
let strToNum1 = Number(str1); // Number라는 내장 함수에 인자로 문자열 변수 전달
console.log(10 + strToNum1); // 20

// 숫자만으로 이루어진 문자열이 아닐 경우
let str2 = "10개";
let strToNumFail = Number(str2); // NaN
// 숫자 값이 아닌 값을 포함하고 있는 문자열을 변환할 때 사용하는 내장 함수를 사용한다.
let strToNum2 = parseInt(str2);
console.log(strToNum2); // 10 출력

// 숫자를 문자열로 변환할 때:
let num1 = 20;
let numToStr = String(num1); // "20"
console.log(numToStr + "입니다"); // "20입니다"
