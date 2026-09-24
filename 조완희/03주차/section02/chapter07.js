// 6가지 요소 조작 메서드

// 1. push
// 배열의 맨 뒤에 새로운 요소를 추가하는 메서드

let arr1 = [1, 2, 3];
const newLength = arr1.push(4);
// console.log(newLength);

// 2. pop
// 배열의 맨 뒤에 요소를 제거하고, 반환

let arr2 = [1, 2, 3];
const popedItem = arr2.pop();
// console.log(popedItem);

// 3. shift
// 배열의 맨 앞의 요소를 제거, 반환

let arr3 = [1, 2, 3];
const shiftedItem = arr3.shift();

//4. unshift
// 배열의 맨 앞에 새로운 요소를 추가하는 메서드

let arr4 = [1, 2, 3];
const newLength2 = arr4.unshift(0);
console.log(newLength2, arr4);

// shift는 배열의 index를 순차적으로 바꿔야하기 때문에 push, pop에 비해서 속도가 느리다.

// 5. slice
// 가위처럼, 배열의 특정 범위를 잘라내서 새로운 배열로 반환
// 끝 요소 + 1
let arr5 = [1, 2, 3, 4, 5];

let sliced = arr5.slice(2, 5);
// 기본 배열은 유지, 짤라서 새로운 배열 생성

let sliced1 = arr5.slice(-1);
// 음수는 꺼꾸로 잘라라, 이런 뜻

// 6. concat
// 두 개의 서로 다른 배열을 이어 붙여 새로운 배열을 반환

let arr6 = [1, 2];
let arr7 = [3, 4];

let concatedArr = arr6.concat(arr7);
console.log(concatedArr);
