// 2-6) 반복문으로 배열과 객체 순회하기
// 1. 배열 순회
let arr = [1, 2, 3];

// 1-1. 배열 인덱스
// 배열의 내부 프로퍼티 length: 배열의 원소 개수
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]); // 1, 2, 3이 각각 출력되며 배열의 내부 원소들 출력
}

// 1-2. for of 반복문
// 배열을 순회하기 위해 존재하는 특수한 반복문
for (let item of arr) {
  // of 뒤에 명시된 배열에 있는 원소에 하나씩 접근하여 변수 item에 저장.
  // item 변수의 값을 하나하나 출력한다.
  console.log(item); // 1 2 3 각각 출력
}

// 둘 다 성능 상의 큰 차이는 없으나 인덱스를 통한 반복문은 인덱스를 통한 활동을 할 수 있는 반면
// for of 반복문은 배열 안에 있는 값을 순회만 해준다.

// 2. 객체 순회
let person = { name: "이름", age: 23, hobby: "게임" };

// 2-1. Object.keys 사용
// 객체에서 Key값들만 뽑아 새로운 배열로 반환해주는 내장 함수.

// person 객체로부터 프로퍼티의 Key 값들만 모아 새로운 배열로 반환한다.
let keys = Object.keys(person);
console.log(keys); // ["name", "age", "hobby"] 배열 출력

// key 값을 뽑아왔으므로, 그냥 배열 순회하듯이 작성하면 된다.
for (let i = 0; i < keys.length; i++) {
  // 또는 (let key of keys)
  console.log(keys[i]); // name age hobby 순차 출력
  // value 값까지 순회하고 싶다면 괄호 표기법을 이용하면 된다.
  console.log(person[keys[i]]);
}

// 2-2. Objects.values 사용
// 객체에서 value 값들만 뽑아 새로운 배열로 반환
let values = Object.values(person); // ["이름", 23, "게임"] 배열 형성
console.log(values);

// 순회하는 방법은 똑같다.
for (let value of values) {
  console.log(value);
}

// 2-3. for in
// for of와 비슷하다고 생각하면 된다.
for (let key in person) {
  // for of가 원소에 하나씩 접근한다면 얘는 key에 하나씩 접근.
  const value = person[key];
  console.log(key, value);
}
