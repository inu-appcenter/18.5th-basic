// 5가지 배열 변형 메서드
//1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환

let arr1 = [
  { name: "최유경", hobby: "테니스" },
  { name: "김효빈", hobby: "테니스" },
  { name: "홍길동", hobby: "독서" },
];

const tennisPeople = arr1.filter(
  (item) => item.hobby === "테니스"
);
console.log(tennisPeople);

//find, findIndex처럼 배열의 모든 요소들을 순회하면서 조건을 만족하는 값들만 새로운 배열로 반환
// 웹서비스 검색기능이나 카테고리별 필터 같은 기능에는 필수적으로 사용됨

//2.map
//배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값들을 모아서 새로운 배열로 반환
let arr2 = [1, 2, 3];
//forEach와 동일
const mapResult1 = arr2.map((item, idx, arr) => {
  return item * 2; //콜백함수 안에 반환값설정 가능
});
console.log(mapResult1); //[2, 4, 6] <- 콜백함수가 반환한 값을 모아 새로운 배열로 반환

// 배열의 값들을 변형한 새로운 배열을 생성할 수 있다.

//예시
let names = arr1.map((item) => item.name);
console.log(names);

//3. sort
// 배열을 사전순으로 정렬하는 메서드
let arr3 = ["b", "a", "c"];
arr3.sort();
console.log(arr3);

// 주의: 만약 문자열이 아니라 숫자값으로 배열이 이루어진 경우 -> sort메소드가 정상적으로 작동X
let arr03 = [10, 3, 5];
arr03.sort((a, b) => {
  if (a > b) {
    // b가 a앞에 와라
    return 1; // -> b, a 배치
  } else if (a < b) {
    //a가 b앞에 와라
    return -1;  //-> a, b 배치
  } else {
    // 두 값의 자리를 바꾸지 마라
    return 0;  // a,b자리를 그대로 유지
  }
});
console.log(arr03); // [3, 5, 10] : 오름차순
// sort메소드는 사전순으로 정렬하기 때문
// 숫자 대소관계를 기준으로 설정하기 위해서 비교기준을 설정하는 콜백하수도 함께 넘겨줘야한다.

//4. toSorted(가장 최근에 추가된 최신 함수)
//정렬된 새로운 배열을 반환하는 메서드
// sort -> 원본배열 자체를 배열
// toSorted -> 원본배열은 두고 정렬된 새로운 배열 반환

let arr5 = ["c", "a", "b"];
let sorted = arr5.toSorted(); //새로운 문자열을 반환하는 거기 때문에 상수나 변수에 저장해야 한다.

console.log(arr5);
console.log(sorted);

//5. join
//배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 메서드

let arr6 = ["hi", "im", "winterlood"];
const joined = arr6.join("-"); //join인수 안에서 구분자를 바꿀 수 있음

console.log(joined);
