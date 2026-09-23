// math 모듈

function add(a, b) {
  return a+b;
}

function sub(a, b) {
  return a-b;
}

// module.exports = {
//   add,
//   sub,
// };

// package.json에서 main : Commonjs -> module로 변경

export {add, sub}; // 이 코드를 지우고 함수 앞에 export 써도 가능

// export defalut : math 모듈에서 하나의 모듈을 대표함
export default function multiply(a, b) { 
  return a*b;
}