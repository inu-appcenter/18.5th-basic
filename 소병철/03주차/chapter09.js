// 2-9) 배열 변형

// 내부 콜백함수는 공통적으로 매개변수, 반복 카운트, 배열 그 자체를 전달받음.

// 1. filter
// 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환

// 객체들의 배열이 하나 있다고 가정하자:
let arr1 = [
  { name: "사람1", hobby: "테니스" },
  { name: "사람2", hobby: "테니스" },
  { name: "사람3", hobby: "독서" },
];

// hobby가 "테니스"인 요소들만 필터링
const tennisPeople = arr1.filter((item) => item.hobby === "테니스");
console.log(tennisPeople); // name이 사람1, 사람2인 객체 두 개가 출력

// 2. map
// 배열의 모든 요소들을 순회하면서 각각 콜백함수를 실행, 그 결과값들을 모아 새로운 배열로 반환.

let arr2 = [1, 2, 3];
const mapResult1 = arr2.map((item, idx, arr) => {
  // map에 들어가는 콜백함수는 반환값을 설정해줄 수 있음.
  // 해당 값들을 다 모아서 새로운 배열을 반환한다.
  return item * 2;
});

console.log(mapResult1); // [2, 4, 6]

// map의 실용적 이용 사례
// arr1에서 객체들의 이름만 담은 배열을 만들어보자
let names = arr1.map((item) => item.name); // item의 name만 반환하도록 함
console.log(names); // ["사람1", "사람2", "사람3"]

// 3. sort
// 배열을 사전 순으로 정리
let arr3 = ["b", "a", "c"];
arr3.sort();
console.log(arr3); // ["a", "b", "c"] 로 정렬됨.

// 주의할 점
arr3 = [10, 3, 5];
arr3.sort();
console.log(arr3); // [10, 3, 5] 그대로 출력됨. 정렬이 이루어지지 않음.
// 사전 순이기 때문에 숫자의 대소 관계로 정렬되지 않는다.
// 숫자의 대소 관계로 정렬하고 싶다면 비교 기준으로 콜백 함수를 넘겨주어야 한다.

// 두 개의 인자를 매개변수로 넘긴다 (두 숫자를 비교)
// 오름차순으로 정렬한다는 가정 하에:
arr3.sort((a, b) => {
  if (a > b) {
    // a가 b보다 크다, b가 a 앞에 오도록 해야 할 때 양수를 반환.
    return 1;
  } else if (b > a) {
    // b가 a보다 크다, a가 b 앞으로 오도록 해야 할 때 음수를 반환.
    return -1;
  } else {
    // 둘이 같은 값이라면 0을 반환해서 둘의 위치를 유지.
    return 0;
  }
});
// 내림차순으로 정렬하고 싶다면 반대로 작성하면 된다.

console.log(arr3); // [3, 5, 10] 출력됨. 정상적으로 오름차순 정렬.

// 4. toSorted
// sort와 달리 원본 배열 자체를 정렬하지 않고 새로운 정렬된 배열을 반환한다.
let arr5 = ["c", "a", "b"];
const sorted = arr5.toSorted();

console.log(arr5); // ["c", "a", "b"] 유지
console.log(sorted); // ["a", "b", "c"] 로 정렬됨

// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐 반환
let arr6 = ["Hello", "JavaScript"];
const joined = arr6.join();

console.log(joined); // Hello,JavaScript 문자열 출력됨
// 구분자로서 콤마까지 붙어서 반환된다.
// 구분자를 바꾸고 싶다면 바꾸고 싶은 구분자를 인자로 전달하면 된다.
const joined2 = arr6.join("-");
console.log(joined2); // Hello-JavaScript
