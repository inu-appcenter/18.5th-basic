//1. forEach
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1,2,3];

arr1.forEach(function (item, idx, arr) {
    console.log(idx, item * 2);

}); // 반복문처럼 순회하면서 매 반복마다 콜백함수를 호출함

let doubledArr = [];

// arr1의 모든 배열의 요소를 빈 배열에 넣어보기


arr.forEach((item) => {
    doubledArr.push(item * 2);
});

//2. includes
// 배열에 특정 요소가 있는지 확인하는 메서드
let arr2 = [1, 2, 3];
let isIncludes = arr2.includes(3);

console.log(isIncludes);
