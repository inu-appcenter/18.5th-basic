//1. 묵시적 형 변환 

let num = 10;
let str = "20";

const result = num + str;
//묵시적으로 num이 string type으로 변함 
//console.log(result);

//2. 명시적 형 변환 
//문자열 -> 숫자
let str1 = "10";
let strToNum1 = Number(str1);
//number은 내장 함수
//console.log(10+strToNum1)

let str2 = "10개";
let strToNum2 = parseInt(str2);
//console.log(strToNum2);

// 숫자 -> 문자열
let num1 = 20;
let numToStr1 = String(num1);

//console.log(numToStr1 + "입니다.");