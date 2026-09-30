// 1. 객체 생성
let obj1 = new Object() // 객체 생성자
let obj2 = {}; // 객체 리터럴 (대부분 사용)

// 2. 객체 프로퍼티 (객체 속성) [key : value]
let person = {
  name : "이승민",
  age : 23,
  hobby : "볼링",
  job : "Student",
  extra : {},
  10 : 20,
  "like cat" : true,
}

// 3. 객체 프로퍼티를 다루는 방법
// 3.1 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)
let name1 = person.name;
let name2 = person.namE; // 존재하지 않는 프로퍼티에 접근 -> undefined
console.log(name1);

let age = person["age"]; // 쌍따옴표 없이 작성 시 변수로 인식하여 오류 발생
console.log(age);

let property = "hobby";
let hobby = person[property];
console.log(hobby);

// 3.2 새로운 프로퍼티를 추가하는 방법
person.mbti = "istp";
person["favoriteFood"] = "라면";

console.log(person);

// 3.3 프로퍼티를 수정하는 방법
person.job = "developer";
person["favoriteFood"] = "김치찌개"

// 3.4 프로퍼티를 삭제하는 방법
delete person.job;
delete person["favoriteFood"];

// 3.5 프로퍼티의 존재 유무를 확인하는 방법 (in 연산자) 
let result1 = "name" in person;
let result2 = "cat" in person;
console.log(result2);