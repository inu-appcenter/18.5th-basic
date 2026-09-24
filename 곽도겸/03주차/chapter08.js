//5가지 요소 순회 및 탐색 메서드

// 1. forEach
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1, 2, 3];

arr1. forEach(function (item, idx, arr) {
// console.log(idx, item * 2);

});

let doubledArr = [];

arr1.forEach((item) => {
doubledArr.push(item * 2);
});

// 2. includes
// 배열에 특정 요소가 있는지 확인하는 그런 메서드
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(10);

// 3. index0f
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
//얕은 비교로 작동해서 원시타입 형태의 값만 찾을수있음
let arr3 = [2, 2, 2];//앞에서 부터 탐색함
let index = arr3. index0f (20);// 못 찾으면 -1 반환
// console.log(index);

// 4. findIndex
// 모든 요소를 순회하면서, 콜백함수를 만족하는 그런
// 특정 요소의 인덱스(위치)를 반환하는 메서드
// 객체의 프로퍼티를 조건식에 넣을수 있어서 깊은비교가 가능함
let arr4 = [1, 2, 3];
const findedIndex = arr4. findIndex((item) => {
if (item === 2) return true;
});
//const findedIndex = arr4. findIndex((item) => item === 2);

// console. log(findedIndex);

// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환

let arr5 = [
{ name: "이정환" },
{ name: "홍길동" },
];

const finded = arr5.find(
    (item)=>item.name === "이정환"
);

console.log(finded);