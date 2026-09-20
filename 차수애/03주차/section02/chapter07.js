// 6가지의 요소 조작 메서드

//1. push
//배열의 맨 뒤에 새로운 요소를 추가하는 메서드
let arr1 = [1,2,3];
const newLength = arr1.push(4,5,6,7); // 배열에 4,5,6,7 추가하고 길이 반환

console.log(arr1);
console.log(newLength);

//2. pop
// 배열의 맨 뒤에 있는 요소를 제거하고, 반환

let arr2 = [1, 2, 3];
const poppedItem = arr2.pop();

console.log(poppedItem); // 3삭제하고 제거된 3 반환함
console.log(arr2);

//3.shift
// 배열의 맨 앞에 있는 요소를 제거, 반환

let arr3 = [1, 2, 3];
const shiftedItem = arr3.shift();

console.log(shiftedItem); //1 제거하고 제거된 1 반환
console.log(arr3); // 배열에는 2,3만 남음

//4. unshift
// 배열의 맨 앞에 새로운 요소를 추가하는 메서드
let arr4 = [1, 2, 3];
const newLength2 = arr4.unshift(0); // 배열에 0을 추가하고 반환값은 배열이 아니라 길이
console.log(newLength2, arr4);

//5.slice
// 마치 가위처럼 배열의 특정 범위를 잘라내서 새로운 배열로 반환

let arr5 = [1, 2, 3, 4, 5]; 
let sliced = arr5.slice(2, 5); // 잘라낼 범위 지정, 2번 인덱스부터 시작해서  5번 인덱스 전까지 잘라냄
let sliced2 = arr5.slice(2); // 2번재 인덱스부터 끝까지 잘라냄
let sliced3 = arr5.slice(-3); // 뒤에서부터 3개 자름

console.log(sliced);
console.log(arr5);// slice로 배열 잘라내도 원본 배열의 값이 바뀌지는 않는다.

//6. concat
// 두개의 서로 다른 배열을 이어 붙여서 새로운 배열로 반환

let arr6 = [1, 2];
let arr7 = [3, 4];

let concatArr = arr6.concat(arr7); 