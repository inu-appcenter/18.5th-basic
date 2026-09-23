// 2.1) Truthy와 Falsy
// 1. Falsy한 값

let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = ""; // 빈 문자열
let f7 = 0n; // Big Integer라는 자료형에 해당하는 값. 웹 개발 중에는 잘 이용하지 않는다.

// !(falsy한 값)을 하면 not을 만나 항상 true인 조건문이 됨
if (!f1) {
  console.log("falsy");
}

// 2. Truthy한 값들
// 7가지 Falsy한 값들을 제외한 나머지 모든 값이 Truthy.
let t1 = "hello"; // 비어 있지 않은 문자열
let t2 = 123; // 0이 아닌 숫자
let t3 = []; // 배열 (비어 있어도 상관 없음)
let t4 = {}; // 객체 (비어 있어도 상관 없음)
let t5 = () => {}; // 화살표 함수
// 등등...

// 조건식에서 참으로 평가됨
if (t1) {
  console.log("truthy");
}

// 3. 활용 사례
// 함수가 하나 있다고 가정해 보자:

// 매개변수로 객체 값을 받아 log로 name 프로퍼티를 출력함
/*function printName(person) {
    console.log(person.name);
  } */

let person; // 근데 변수가 undefined라면
// printName(person); Uncaught TypeError: Cannot read properties of undefined (reading 'name') 오류 발생
// 따라서 함수에서 null이거나 undefined인 것을 걸러 주어야 한다.

function printName(person) {
  // 조건문으로 Falsy한 값을 한 번에 걸러준다.
  if (!person) {
    console.log("person의 값이 없음");
    return;
  }
  console.log(person.name);
}

printName(person); // person이 undefined이기 때문에 "person의 값이 없음" 출력
person = { name: "이름" };
printName(person); // "이름" 출력
