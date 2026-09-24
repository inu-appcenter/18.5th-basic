// 1. 배열의 구조 분해 할당

let arr = [1, 2, 3];

// let [one, two , three] = arr;
// let [one, two , three, four] = arr; // 기본 undefined;
let [one, two, three, four = 4] = arr; // 기본값 설정 가능;

// 2. 객체의 구조 분해 할당

let person = {
  name: "이정환",
  age: 27,
  hobby: "테니스",
};

// let { name, age, hobby } = person; // 위에 조건과 동일

let {
  name,
  age: myAge, // 프로퍼티 이름 바꾸는 법
  hobby,
} = person; // 위에 조건과 동일
console.log(name, myAge, hobby);

// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법

const func = ({ name, age, hobby, extra }) => {
  console.log(name, age, hobby, extra);
};

func(person);
