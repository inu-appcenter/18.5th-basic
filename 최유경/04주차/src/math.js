//math 모듈

export function add(a, b) {
  return a + b;
}
export function sub(a, b) {
  return a - b;
}
/*
//1. CJS(Common JS 모듈 시스템)
//모듈 내보내기
module.exports = {
  add,
  sub,
};
*/

//2.ESM(ES 모듈 시스템) -> 패키지 안에서 ESM을 쓰겠다하는 설정을 해줘야함
//export { add, sub }; // 내보내기1

// 내보내기2: 함수선언문 앞에다가 export을 붙여줘도 괜찮음
// 하나의 모듈을 대표하는 default 값을 내보내기
export default function multiply(a, b) {
  return a * b;
}
