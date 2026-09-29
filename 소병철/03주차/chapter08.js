// 2-8) 배열 메서드 2. 순회와 탐색
// 5가지의 요소 순회 및 탐색 메서드

// 1. forEach()
// 모든 요소를 순회하면서 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1, 2, 3];

// forEach 메서드가 반복문처럼 순회하면서
// 매 반복마다(배열 요소 개수만큼) 콜백 함수를 호출하고 매개변수로
// 현재 요소의 값, 현재 반복 카운트, 전체 배열의 값을 전달한다.
arr1.forEach(function (item, idx, arr) {
  console.log(idx, item * 2); // 인덱스, 요소의 값 * 2 출력
});

// 활용, arr1의 모든 값을 곱하기 2를 해서 넣어보자
let doubledArr = [];
arr1.forEach((item) => {
  doubledArr.push(item * 2);
});
console.log(doubledArr); // [2, 4, 6]

// 2. includes()
// 배열에 특정 요소가 있는지 확인
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(3); // 3이 있는지 확인

console.log(isInclude); // true
// 존재하지 않는 값이라면
console.log(arr2.includes(10)); // false

// 3. indexOf()
// 특정 요소의 위치(인덱스)를 찾아 반환
let arr3 = [1, 2, 3];
let idx = arr3.indexOf(2); // 2라는 요소의 인덱스를 찾아 반환
console.log(idx); // 1 출력, arr3[1] === 2

// 배열에 찾으려는 값이 여러 개라면
arr3 = [2, 2, 2];
idx = arr3.indexOf(2);
// 가장 앞부터 탐색하기 때문에 가장 처음 발견된 2라는 요소의 인덱스를 반환
console.log(idx); // 0 출력

// 존재하지 않는 값이라면
idx = arr3.indexOf(20);
console.log(idx); // 존재하지 않는다는 의미로 -1 반환

// 4. findIndex()
// 모든 요소를 순회하며, 콜백 함수를 만족하는 특정 요소의 인덱스를 반환하는 메서드
// => 콜백 함수가 가장 처음으로 참을 반환하는 요소의 인덱스를 반환한다.
// 원시 타입이 아닌 객체 타입의 값들이 저장된 배열에서 주로 사용한다.
let arr4 = [1, 2, 3];
let foundIndex = arr4.findIndex((item) => {
  if (item === 2) return true;
});

console.log(foundIndex); // 1

// indexOf처럼 만족하는 요소가 중복된다면 처음 만족하는 요소를 반환한다.
foundIndex = arr4.findIndex((item) => {
  if (item % 2 !== 0) return true;
});

console.log(foundIndex); // 0
// 만족하는 요소가 없다면 indexOf와 마찬가지로 -1을 반환한다.

// 5. find()
// 모든 요소를 순회하며 콜백함수를 만족하는 요소를 그대로 반환
let arr5 = [{ name: "이름1" }, { name: "이름2" }];

const found = arr5.find((item) => item.name === "이름1");
console.log(found); // { name: "이름1" }, 객체를 그대로 반환
