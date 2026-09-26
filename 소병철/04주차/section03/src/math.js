// 덧셈 뺄셈정도만 진행할 간단한 계산 기능을 만듦.
// math 모듈

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

// expoets라는 프로퍼티의 값으로 객체를 저장.
// 두 함수를 모듈 바깥으로 내보냄 (변수/함수명과 키값이 같으면 축약 가능)
// module.exports = {
//   add,
//   sub,
// };

// ESM을 이용하여 내보내기
// export 키워드 뒤에 객체를 리터럴로 생성해서 내보낼 것을 담는다.
export { add, sub };

// 기본값 내보내기
export default function multiply(a, b) {
  return a * b;
}
