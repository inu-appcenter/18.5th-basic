// 1. 객체 생성
let obj1 = new Object(); //객체 생성자
let obj2 = {} //객체 리터럴

// 2. 객체 프로퍼티 (객체 속성) key : value 
//value에는 아무거나 와도 된다
//띄어쓰기가 포함된 key의 경우 ""로 묶어줘야한다.
let person = {
    name : "곽도겸",
    age : 21,
    hobby: "야구",
    "like cat" : true,
}

// 3.객체 프로퍼티 다루는 방법
// 3-1. 특정 프로퍼티에 접근 (점 표기법,괄호 표기법)\
//동적으로 프로퍼티를 변화시키면서 꺼내와야하면 괄호 표기법 아니면 간단한 점 표기법을 이용
let name = person.name; //점 표기법 

let age = person["age"];//괄호 표기법
let property = "hobby";
let hobby = person[property];

// 3-2. 새로운 프로퍼티 추가하는 방법
person.job="학생";
person["favoriteFood"] = "떡볶이";

// 3-3. 프로퍼티를 수정하는 방법
person.job="앱센터학생";
person["favoriteFood"] = "치킨";

// 3-4. 프로퍼티를 삭제하는 방법
delete person.job;
delete person["favoriteFood"];

// 3-5. 프로퍼티의 존재 유무를 확인하는 방법 (in 연산자)
let result1 = "name" in person; //true
let result2 = "cat" in person; //false
