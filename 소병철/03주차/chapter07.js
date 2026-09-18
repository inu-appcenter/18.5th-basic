// 2-7) 배열 메서드 1. 요소 조작
// 6가지의 요소 조작 메서드

// 1. push()
// 배열의 맨 뒤에 새로운 요소를 추가하는 메서드
let arr1 = [1, 2, 3];
arr1.push(4); // 4라는 요소를 배열의 맨 뒤에 추가
console.log(arr1); // [1, 2, 3, 4] 출력

// 여러 개를 추가할 수 있으며
// push 메서드는 추가하고 난 뒤 변환된 배열의 길이를 반환한다.
let newLength = arr1.push(5, 6, 7);
console.log(arr1); // [1, 2, 3, 4, 5, 6, 7]
console.log(newLength); // 7 출력

// 2. pop()
// 맨 뒤의 요소를 제거하고, 제거된 요소를 반환
let arr2 = [1, 2, 3];
const poppedItem = arr2.pop();

console.log(poppedItem); // 3
console.log(arr2); // [1, 2]

// 3. shift()
// 배열의 맨 앞 요소를 제거하고, 반환
let arr3 = [1, 2, 3];
const shiftedItem = arr3.shift();

console.log(shiftedItem, arr3); // 1, [2, 3]

// 4. unshift()
// 배열의 맨 앞에 새로운 요소를 추가
let arr4 = [1, 2, 3];
// push와 마찬가지로 여러 개를 추가할 수 있고, 추가하고 난 뒤 길이를 반환함.
const newLength2 = arr4.unshift(0);
console.log(arr4, newLength2); // [0, 1, 2, 3], 4

// shift 계열 메서드는 push나 pop보다 느리게 동작한다.
// 앞에 추가/삭제할 경우 뒤에 있는 것을 밀어내는/당겨오는 동작이 필요하기 때문.

// 5. slice()
// 배열의 특정 범위를 잘라내 새로운 배열로 반환
let arr5 = [1, 2, 3, 4, 5];
let sliced = arr5.slice(2, 5); // 시작 부분의 인덱스와 끝 부분의 인덱스 + 1를 인수로 전달한다.
console.log(sliced); // [3, 4, 5]
console.log(arr5); // [1, 2, 3, 4, 5] 출력, 원본 배열의 값은 변화하지 않는다.

// 범위의 끝 부분을 인자로 전달하지 않는다면 시작 부분 인덱스부터 끝까지 잘라낸다.
let sliced2 = arr5.slice(2);
console.log(sliced2); // [3, 4, 5]

// 뒤에서부터 자르고 싶다면 음수 값을 넣는다.
let sliced3 = arr5.slice(-1);
console.log(sliced3); // [5], 뒤에서부터 하나만 잘랐음.

// 6. concat()
// 두 개의 서로 다른 배열을 이어붙여 새로운 배열을 반환
let arr6 = [1, 2];
let arr7 = [3, 4];

let concatedArr = arr6.concat(arr7);
console.log(concatedArr); // [1, 2, 3, 4]
