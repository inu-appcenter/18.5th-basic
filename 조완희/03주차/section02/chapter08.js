// 5가지 요소 순회 및 탐색 메서드
// 1, forEach
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드

let arr1 = [1, 2, 3];

arr1.forEach(function (item, idx, arr1) {
  //   console.log(idx, item * 2);
});

let doubledArr = [];

arr1.forEach((item) => {
  doubledArr.push(item * 2);
});

// console.log(doubledArr);

// 2. includes
// 배열에 특정 요소가 있는지 확인하는 그런 메서드
// True of false

let arr2 = [1, 2, 3];
let isIncludes = arr2.includes(3);
// console.log(isIncludes);

// 3. indexOf
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
// 똑같은 요소가 존재 -> 첫번쨰 요소 index 반환
// 찾는 index가 없다 -> -1 반환
// 얕은 비교를 통해서 요소가 있는지 확인하기 때문에 => 객체 요소를 찾기가 곤란

let arr3 = [1, 2, 3];
let index1 = arr3.indexOf(2);

// console.log(2);

// 4. findIndex
// 모든 요소를 순회하면서, 콜백함수(조건화 가능)를 만족하는 그런
// 특정 요소의 인덱스(위치)를 반환하는 메서드
// 존재 x -> -1 반환
// 객체 요소 찾기 좋다(핵심)

let arr4 = [1, 2, 3];
let findIndex = arr4.findIndex(
  (item) =>
    //   if (item == 2) {
    //     return true;
    //   }
    item % 2 !== 0,
);

console.log(findIndex);

// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환[
let arr5 = [{ name: "이정환" }, { name: "홍길동" }];

const finded = arr5.find((item) => item.name === "이정환");
console.log(finded);
