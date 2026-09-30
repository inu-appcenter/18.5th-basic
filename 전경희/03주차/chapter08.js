// 5가지 요소 순회 및 탐색 메서드
// 1. forEach
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1, 2, 3];

arr1.forEach(function (item, idx, arr) {
  // console.log(idx, item * 2);
});
// 요소의 개수만큼 호출 : 총 3회 호출
//          item, idx, arr
// 1회 호출 :  1     0   
// 2회 호출 :  2     1   
// 3회 호출 :  3     2   


let doubledArr = [];

arr1.forEach((item)=>{
  doubledArr.push(item * 2);
});

// console.log(doubledArr);


// 2. includes
// 배열에 특정 요소가 있는지 확인하는 메서드 
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(10);

// console.log(isInclude);

// 3. indexOf
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
// let arr3 = [1, 2, 3];
let arr3 = [2, 2, 2];
// let index = arr3.indexOf(2);
let index = arr3.indexOf(20); // -1 반환

// console.log(index);

let objectArr = [
  { name: "이정환" },
  { name: "홍길동" },
];

// // 얕은 비교, 단순한 원시 타입의 값을 찾을 때 => indexOf
// console.log( 
//   objectArr.indexOf({ name: "이정환" })
// );

// // 콜백 함수를 이용해서 복잡한 객체값도 찾아낼 수 있다. => findIndex
// objectArr.findIndex( 
//   (item) => item.name === "이정환"
// );

// 4. findIndex
// 모든 요소를 순회화면서, 콜백함수를 반복하는 그런
// 특정 요소의 인덱스(위치)를 반환하는 메서드
let arr4 = [1, 2, 3];
const findedIndex = arr4.findIndex(
  // (item) => item === 999 // -1 반환
  (item) => item % 2 !== 0
  // (item) => { if (item % 2 !== 0) return true; }
  );

console.log(findedIndex);

// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소 그대로 반환

let arr5 = [
  { name: "이정환" },
  { name: "홍길동" },
]; 

const finded = arr5.find(
  (item) => item.name === "이정환"
);

console.log(finded);