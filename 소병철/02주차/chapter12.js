// 1-12) 함수 표현식과 화살표 함수

// 1. 함수 표현식
// 함수 선언
function funcA() {
  console.log("funcA");
}

// 함수 자체를 변수에 저장
// 함수도 숫자나 문자열과 같은 하나의 값으로 취급하기 때문에 변수에 저장할 수 있다.
let varA = funcA;
// 함수 자체가 콘솔에 출력됨
console.log(varA);

// 저장한 함수를 변수의 이름으로 호출할 수 있다.
varA(); // "funcA" 출력

// 변수 초기화문에 함수를 선언해서 바로 변수로서 사용할 수 있다.
let varB = function funcB() {
  console.log("funcB");
};

varB(); // "funcB" 출력
// funcB(); 이건 불가능.
// 변수의 값으로서 함수가 생성된 것이기 때문에, 함수의 이름으로 함수를 호출할 수 없다.
// Uncaught ReferenceError: funcB is not defined
// 변수에 함수 선언 시 함수명 생략해도 무방함(익명 함수). (let varB = function () {...};)
// 함수 표현식으로 만든 함수들은 호이스팅의 대상이 되지 않는다. (무조건 선언 후 사용)

// 2. 화살표 함수
// 함수를 간결하게 생성할 수 있도록 해 주는 문법.
let varC = () => {
  return 1;
};

console.log(varC()); // 1 출력.
// 함수가 값을 반환하기만 한다면 중괄호와 return문도 지워줄 수 있다.
// let varC = () => 1;

// 매개변수가 필요하다면 소괄호 안에 똑같이 선언해주면 됨.
let varD = (value) => value + 1;
console.log(varD(10)); // 11 출력
