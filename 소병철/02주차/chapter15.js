// 1-15) 객체 1

// 1. 객체 생성
// 두 가지 방법이 있다.
let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터럴 (대부분의 경우에 사용)
// 동일한 방법이긴 하나 확실히 객체 리터럴이 간결하다.

// 2. 객체 프로퍼티 (객체 속성)
// 객체를 생성하고 객체를 표현하기 위한 여러 값을 넣는다.
let person = {
  // (프로퍼티의 이름, key) : (value)
  // name, age, hobby라는 세 개의 프로퍼티를 가진 객체
  name: "소병철",
  age: 23,
  hobby: "게임",
  // value의 자료형에 제한이 없고 (함수, 객체가 들어갈 수도 있다)
  // 프로퍼티의 개수 제한이 없으므로 자유롭게 추가할 수 있다.

  // 프로퍼티의 키 값으로는 문자열이나 숫자만 이용할 수 있다.
  10: 20, // 숫자가 key일 수 있음.
  "like cat": false, // 띄어쓰기가 들어간 문자열은 따옴표가 필요하다.
};

// 3. 객체 프로퍼티를 다루는 법
// 3.1 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)
let name = person.name; // (객체명).(접근하고자 하는 프로퍼티의 Key) (점 표기법)
console.log(name); // "소병철" 출력
name = person.what; // 존재하지 않는 키에 접근 시
console.log(name); // undefined

let age = person["age"]; // (객체명)[(Key, 문자열의 경우 따옴표를 붙여줘야 함)] (괄호 표기법)
console.log(age); // 23 출력
age = person["what"]; // 존재하지 않는 키에 접근 시
console.log(age); // undefined

// 변수에 접근하고자 하는 Key 값을 담아 프로퍼티를 꺼내오도록 할 수 있다.
let property = "hobby";
let hobby = person[property]; // person["hobby"]와 같은 역할을 한다.
console.log(hobby); // "게임" 출력

// 3.2 새로운 프로퍼티를 추가하는 방법
person.job = "대학생"; // 점 표기법으로 추가 시
person["favoriteFood"] = "햄버거"; // 괄호 표기법으로 추가 시

// 객체 전체를 출력한다.
console.log(person);

// 3.3 프로퍼티를 수정하는 방법
// 추가와 똑같은 방식으로 하면 된다.
person.job = "무직";
person["favoriteFood"] = "피자";

console.log(person);

// 3.4 프로퍼티를 삭제하는 방법
// delete라는 키워드를 사용한다.
// delete (삭제하고자 하는 프로퍼티)
delete person.job;
delete person["favoriteFood"];

console.log(person);

// 3.5 프로퍼티의 존재 유무를 확인하는 방법 (in 연산자)
let result1 = "name" in person; // true
let result2 = "cat" in person; // false
