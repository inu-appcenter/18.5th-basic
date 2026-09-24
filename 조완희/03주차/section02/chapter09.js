// 5가지 배열 변형 메서드
// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환

let arr1 = [
  { name: "이정환", hobby: "테니스" },
  { name: "김효빈", hobby: "테니스" },
  { name: "홍길동", hobby: "독서" },
];

const tennisPeople = arr1.filter((item) => item.hobby === "테니스");

// console.log(tennisPeople);

// 2. map
// 배열의 모든 요소를 순회하면서, 각각의 콜백함수를 실행하고 그 결과값들만 모아서 새로운 배열로 반환

let arr2 = [1, 2, 3];
arr2.map((item, idx, arr) => {
  //   console.log(idx, item);
});

const mapResult1 = arr2.map((item, idx, arr) => {
  return item * 2;
});

// console.log(mapResult1);

let names = arr1.map((item) => item.name);
// console.log(names);

// 3, sort
// 배열의 사전순으로 정렬하는 메서드
// 숫자는 작동 안한다.

let arr3 = ["b", "c", "a"];

arr3.sort();
// console.log(arr3);

let arr31 = [10, 3, 5];

arr3.sort((a, b) => {
  if (a > b) {
    // b가 a 앞에 와라
    return true;
    // true => 작은 놈이 앞에 온다.
  } else if (a < b) {
    // a가 b 앞에 와라
    return false;
  } else {
    // 두 값의 자리를 바꾸지 마라.
    return 0;
  }
});

// toSorted
// 정렬된 새로운 배열을 변환하는 메서드

let arr5 = ["c", "b", "a"];
const sorted = arr5.toSorted();

console.log(arr5);
console.log(sorted);

// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 변환하는 그런 메서드
let arr6 = ["hi", "im", "winter"];

const joined = arr6.join(" ");

console.log(joined);
