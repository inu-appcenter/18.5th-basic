//1. 객체 생성
let obj1 = new Object(); //객체 생성자
let obj2 = {}; //객체 리터럴 (대부분 사용)

//2. 객체 프로퍼티 (객체 속성)
let person = {
    name: "이정환", // key : value
    age: 27,
    hobby: "테니스",
    job: "FE",
    extra : {},
    10 : 20,
    "like cat" : true,
};

// 3. 객체 프로퍼티를 다루는 방법
// 3.1 특정 프로터피에 접근(점표기법, 괄호 표기법)
let name = person.name; // 객체이름.접근하고자하는 키

let age = person["age"]; // 객체{"접근하고자하는 키"}

let property = "hobby";
let hobby = person[property];
console.log(hobby);


//새로운 프로퍼티를 추가하는 방법
person.job = "fe";
person["favoritFood"] = "떡볶이";

//3.3 프로퍼티; 를 수정하는 방법
person.job = "educator"
person["favoritFood"] = "초콜릿"
 
// 3.4 프로퍼티를 삭제하는 방법
delete person.job;
delete person["favoritFood"];

//3.5 프로퍼티의 존재 유무를 확인하는 방법(in연산자)
let result1 = "name" in person; //존재하면 ture, 아니면 false
let result2 = "cat" in person;