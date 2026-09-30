// 1. 함수 표현식
// 호이스팅 대상 X

function funcA() {
  console.log("funcA");
}

let varA = funcA;
// console.log(varA); // funcA() 함수 자체를 출력
varA(); // funcA

let varB = function funcB() {
  console.log("funcB");
};

varB(); // funcB

// 2. 화살표 함수
// let varC = () => {
//   return 1;
// };

let varC = () => 1; // return 생략 가능

console.log(varC()); // 1

let varD = (value) => value + 1;

console.log(varD(10)); // 11

let varE = (value) => {
  console.log(value);
  return value + 1;
};

console.log(varE(10)); // 10, 11