// 1-16) 객체 2

// 1. 상수 객체
// 상수에 저장한 객체를 상수 객체라고 한다.
const animal = {
  type: "고양이",
  name: "나비",
  color: "black",
};

// 상수인 객체에 또 다른 객체를 생성해서 할당하는 것은 오류가 발생한다.
// animal = { a: 1 }; Uncaught TypeError: Assignment to constant variable.

// 그러나 새로운 프로퍼티를 추가, 프로퍼티의 수정, 삭제는 가능하다.
animal.age = 2; // 추가
animal.name = "까망이"; // name 수정
delete animal.color; // color 삭제

console.log(animal);

// 2. 메서드
// 값이 함수인 프로퍼티를 의미한다.
// 객체의 동작을 정의할 때 사용한다.
const person = {
  name: "소병철",

  // 메서드
  // 익명 함수로도 만들 수 있고, 화살표 함수로도 만들 수 있다.
  sayHi: function () {
    console.log("안녕");
  },

  // 메서드 선언
  sayHello() {
    console.log("안녕!");
  },
};

person.sayHi(); // 함수이기 때문에 호출 가능. "안녕" 출력
person["sayHello"](); // 선언한 메서드를 호출
person.sayHello(); // 점 표기법으로도 호출 가능.
