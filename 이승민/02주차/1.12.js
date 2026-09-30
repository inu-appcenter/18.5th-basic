// 1. 함수 표현식

function funcA() {
  console.log("funcA");
}
let varA = funcA;
varA();

let varB = function () // 익명 함수
{ 
  console.log("funcB");
};

varB(); // 함수 표현식으로 만든 함수들은 호이스팅 X

// 2. 화살표 함수
let varC = (value) => value + 1; // { return vaule + 1; }과 같은 의미
console.log(varC(10));