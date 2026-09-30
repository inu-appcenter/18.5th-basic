// 1. 묵시적 형 변환 - 자바스크립트 엔진이 알아서 형 변환 하는것

let num = 10;
let str = "20";

const result = num + str; //묵시적 형 변환이 일어나서 1020이 된다.
console.log(result);

// 2. 명시적 형 변환 - 개발자가 직접 형 변환 하는것

// 문자열 -> 숫자
let str1 = "10";
let strtoNum = Number(str1); //문자열을 숫자로 변환
console.log(10 + strtoNum);

let str2 = "10개";
let strtoNum2 = Number(str2); //문자열을 숫자로 변환

console.log(strtoNum2); //NaN이 나온다. 숫자로 변환할 수 없는 문자열이기 때문에

let strtoNum3 = parseInt(str2); //문자열을 숫자로 변환
console.log(strtoNum3); 

// 숫자 -> 문자열
let num1 = 10;
let numToString = String(num1); //숫자를 문자열로 변환
console.log(numToString + "입니다");