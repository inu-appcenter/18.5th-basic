// 1. spread 연산자
// -> 흩 뿌리다, 펼치다.
// -> 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할

let arr1 = [1, 2, 3];
let arr2 = [4, ...arr1, 5];

let obj1 = {
  a: 1,
  b: 2,
};

let obj2 = {
  ...obj1,

  c: 3,
  d: 4,
};

function funA(a, b, c) {
  console.log(a, b, c);
}

funA(...arr1);

// 2. Rest 매개변수
// -> Rest는 나머지, 나머지 매개변수
// rest 뒤에 추가 변수 오면 오류가 난다.

function funcB(one, ...rest) {
  console.log(rest);
}

funcB(...arr1);
