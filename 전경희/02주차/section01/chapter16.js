// 1. 상수 객체
const animal = {
  type: "고양이", 
  name: "나비", 
  color: "black", 
};

animal.age = 2; // 추가
animal.name = "까망이" // 수정
delete animal.color; // 삭제
// 문제가 되지 않는다.

// animal = 123; 
// 이건 문제가 됨

console.log(animal);

// 2. 메서드
// -> 값이 함수인 프로퍼티를 말함

const person = {
  name: "이정환",
  // 매서드 선언
  // 개체의 동작을 설정한다.
  sayHi() {
    console.log("안녕!");
  },
};

person.sayHi();
person["sayHi"]();
