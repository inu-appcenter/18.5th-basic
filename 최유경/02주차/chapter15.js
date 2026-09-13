//1. 객체 생성
//
let obj1 = new Object(); // (1)객체 생성자
let obj2 = {}; // (2)객체 리터럴(대부분 사용)

//2. 객체 프로퍼티(객체 속성)
let person = {
	name: "최유경", //(Key : Value) 
	age: "21",
	location: "대구",
  extra: true, //value에 어떤 자료형도 가능
  10: 20, //key는 문자열이나 숫자만 가능
  "like cat" : true, //공백이 있는 key는 반드시 따옴표로 묶어야 함
};

//3. 객체 프로퍼티를 다루는 방법
//3-1. 특정 프로퍼티에 접근(점 표기법, 괄호 표기법)
let name = person.name; //점 표기법
console.log(name);
let name1 = person.name1; 
console.log(name1); //undefined

let age = person["age"]; //괄호 표기법
console.log(age);
let age1 = person["age1"]; 
console.log(age1); //undefined

let property = "location";
let Location = person[property]; 
console.log(Location);

//3.2 새로운 프로퍼티를 추가하는 방법
person.job = "student"; //점 표기법
person["favoriteFood"] = "마라탕"; //괄호 표기법
console.log(person);

//3.3프로퍼티를 수정하는 방법
person.job = "learner"; //점 표기법
person["favoriteFood"] = "라면"; //괄호 표기법
console.log(person);

//3.4 프로퍼티를 삭제하는 방법
delete person.job; //점 표기법
delete person["favoriteFood"]; //괄호 표기법
console.log(person);

//3.5 프로퍼티의 존재 유무를 확인하는 방법(in 연산자)
let result1 = "name" in person; //person객체안에 name이라는 프로퍼티가 있는 가
let result2 = "cat" in person; 
console.log(result1); //true
console.log(result2); //false


