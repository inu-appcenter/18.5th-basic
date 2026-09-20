//1. forEach
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1,2,3];

arr1.forEach(function (item, idx, arr) {
    console.log(idx, item * 2);

}); // 반복문처럼 순회하면서 매 반복마다 콜백함수를 호출함

let doubledArr = [];

// arr1의 모든 배열의 요소를 빈 배열에 넣어보기


arr1.forEach((item) => {
    doubledArr.push(item * 2);
});

//2. includes
// 배열에 특정 요소가 있는지 확인하는 메서드
let arr2 = [1, 2, 3];
let isIncludes = arr2.includes(3);

console.log(isIncludes); // true 출력

//3. indexOf
//특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
let arr3 = [2,2,2]
let index = arr3.indexOf(2); // 숫자가 동일한게 많을땐 가장 먼저 있는 숫자 위치가 출력됨
console.log(index);

//4. findIndex
// 모든  요소를 순회하면서, 콜백함수를 만족하는
// 특정 요소의 인덱스(위치)를 반환하는 메서드

let arr4 = [1, 2, 3];
const findedIndex = arr4.findIndex((item)=> {
    if (item % 2 !== 0 ) return true;
});

console.log(findedIndex);


//5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환

let arr5 = [
    { name : "이정환"},
    { name : "홍길동"},
];

const finded = arr5.find(
    (item) => item.name == "이정환"
);