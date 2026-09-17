//1. 상수 객체
const animal = {
  type: "고양이",
  name: "나비",
  color: "검정색",
}

//animal = {a : 1}; //오류 -> 상수는 재할당 불가능

animal.age = 2; //추가
animal.name = "냥이"; //수정
delete animal.color; //삭제

console.log(animal);

//2. 메서드
//-> 값이 함수인 프로퍼티를 말함

const person = {
  name: "최유경",
  //메서드
  /*
  sayHi: function(){
    console.log("안녕!");
  },
  */
 //메서드 선언
  sayHi(){
    console.log("안녕!");
  },
}
person.sayHi(); //점표기법
person["sayHi"](); //괄호표기법
// 메서드는 객체의 동작을 정의하는 데에 사용