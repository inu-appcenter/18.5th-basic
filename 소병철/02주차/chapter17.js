// 1-17) 배열

// 1. 배열 생성
let arrA = new Array(); // 배열 생성자
let arrB = []; // 배열 리터럴 (대부분의 경우 사용)

// 배열 선언과 동시에 초기화하기
let arrC = [1, 2, 3];
console.log(arrC); // 배열 전체 출력

// 배열 내부엔 어떤 값이든 자유롭게 넣을 수 있으며 길이의 한계도 없다.
arrC = [
  1,
  "Hello",
  true,
  null,
  undefined,
  () => {}, // 화살표 함수
  {}, // 객체
  [], // 또 다른 배열
];

// 2. 배열 요소 접근
// 요소의 인덱스를 통한 접근
let item1 = arrC[0];
let item2 = arrC[1];
console.log(item1, item2); // 1 'Hello' 출력

// 인덱스를 통해 접근하여 요소 수정
arrC[0] = "hello";
