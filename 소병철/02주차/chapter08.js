// 1-8) 연산자 2
// 1. null 병합 연산자 (??)
// 존재하는 값을 추려내는 기능을 한다.
// -> null이나 undefined가 아닌 값을 추려낸다.

let var1; // undefined
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2; // undefined가 아닌 값(var2, 10)을 찾아 저장한다.
console.log(var4); // 10 출력

let var5 = var2 ?? var3; // 둘 다 null이나 undefined가 아니라면 처음에 적힌 값을 저장한다.
console.log(var5); // 10 출력

// 회원 관리 시스템을 만든다고 가정할 때 유용.
let userName = "소병철";
let userNickName = "sbychul";

// 표시되는 이름이 userName이라는 변수의 값이 존재한다면 userName을 저장
// 없다면 닉네임으로 저장하라는 요구사항이 있다면
let displayName = userName ?? userNickName; // "소병철"
console.log(displayName);

// 2. typeof 연산자
// 값의 타입을 문자열로 반환하는 기능을 한다.
let var6 = 1;
var6 = "Hello"; // JS의 변수의 타입은 동적
// 현재 변수에 저장된 값의 타입이 궁금할 때 사용

let t1 = typeof var6;
console.log(t1); // string

// 3. 삼항 연산자
// 항을 3개 사용하는 연산자를 의미한다.
// 보통 2개의 항을 사용하나, 특수하게 3개의 항을 사용한다.
// 조건식을 이용하여 참, 거짓일 때의 값을 다르게 반환할 때 사용한다.
let var7 = 10;

// 요구사항: 변수 res에 var7의 값이 짝수라면 "짝", 홀수라면 "홀"이라는 문자열을 저장
// (조건식) ? (참일 때 할당할 값) : (거짓일 때 할당할 값)
let res = var7 % 2 === 0 ? "짝" : "홀"; // "짝"
