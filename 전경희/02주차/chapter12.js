// 1. 함수 표현식

function funcA() {
  // console.log("funcA");
}

let varA = funcA;
//console.log(varA);
varA();

// 익명함수, 호이스팅이 되지 안는다.
let varB = function () { 
  // console.log("funcB");
};

varB();

// 2. 화살표 함수
//let varC = () => 1;
//let varC = (value) => vaule + 1;
let varC = (value) => {
  console.log(value);
  return value + 1;
}

console.log(varC(10));
