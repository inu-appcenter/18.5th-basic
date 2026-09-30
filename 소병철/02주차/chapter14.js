// 1-14) 스코프
// 함수에 접근하거나 호출할 수 있는 범위를 뜻한다.

let a = 1; // 전역(전체 영역) 스코프를 갖는다.
function funcA() {
  // 전역 스코프로 선언된 매개변수를 함수 내부에서 불러와 사용할 수 있다.
  console.log(a); // 1 출력

  let b = 2; // funcA 블록 내부에서 선언, 지역 스코프를 가짐.
}

funcA(); // 정상적으로 1이 출력됨.
// console.log(b); 오류 발생.
// 함수 외부에서 함수 내부에서 선언한 변수(지역 스코프를 갖는 변수)를 사용할 수 없다.
// Uncaught ReferenceError: b is not defined

// 조건문, 반복문, 함수 등 중괄호 내부에 선언된 모든 변수들은 지역 스코프를 갖는다고 이해하면 된다.
if (true) {
  let c = 1;
}
// console.log(c); 불가. Uncaught ReferenceError

for (let i = 0; i < 10; i++) {
  let d = 1;
}
// console.log(i, d); 마찬가지로 불가능.

function funcB() {
  console.log(a);
  function funcC() {} // 중첩 함수는 지역 스코프를 갖는다.
}
// funcC(); 불가능. 중첩 함수로서 선언된 함수는 바깥에서 호출할 수 없다.
// 그러나 조건문이나 반복문 내부에서 선언된 함수는 지역 스코프를 갖지 않는다.
