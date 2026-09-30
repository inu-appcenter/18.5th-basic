//1. Spreed 연산자(...)
//-> Spreed : 흩뿌리다, 펼치다 라는 뜻
// -> 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할

let arr1 = [1, 2, 3];
//let arr2 = [4, arr1[0], arr1[1], arr1[2], 5, 6];  //arr1의 배열 요소가 수정될 수 있기 때문에 이렇게 작성하는 건 위험

let arr2 = [4, ...arr1, 5, 6]; //... -> Spreed 연산자
console.log(arr2)

let obj1 = {
  a: 1,
  b: 2,
};
let obj2 = {
  // a:obj1.a,
  // b:obj1.b,
  ...obj1,
  c: 3,
  d: 4,
};
console.log(obj2);

//함수 활용
function funcA(p1, p2, p3) {
  console.log(p1, p2, p3);
}
funcA(...arr1)

//2. Rest매개변수
//-> Rest는 나머지, 나머지 매개변수
// 배열 형태로 한번에 여러개의 매개변수를 받을 수 있다.
function funcB(one, ...rest) { //이때 ...은 Spreed연산자가 아니라 Rest연산자임
  console.log(rest);
}
funcB(...arr1);

// 주의: Rest 매개변수 뒤에는 추가로 매개변수를 더 선언할 수 없다.
// Rest매개변수를 사용할 때 ...뒤에 이름은 마음대로 작성 가능
