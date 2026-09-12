// 스코프
// -> 전역(전체 영역) 스코프/ 지역 스코프
// -> 전역 스코프 : 전체 영역에서 접근 가능
// -> 지역 스코프 : 특정 영역에서만 접근 가능

let a = 1; // 전역 스코프

function funcA() {
  let b = 2; 
  console.log(a); // 지역 스코프

  function funcB() {} // 함수 선언식은 함수 블록 안에서만 지역 스코프 가짐
}

funcA();
// console.log(b); // 오류 발생

if(true) {
  let c = 1;

  // function funcB() {} // if문 이나 for 문 같은 경우 지역 스코프를 갖지 않음
}

// console.log(c); // 오류 발생

for(let i = 0; i < 10; i++) {
  let d = 1;

  // function funcB() {} // if문 이나 for 문 같은 경우 지역 스코프를 갖지 않음
}

// console.log(d); // 오류 발생

funcB(); // 오류 발생

