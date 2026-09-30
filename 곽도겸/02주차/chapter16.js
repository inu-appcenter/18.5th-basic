// 1. 상수 객체
//상수객체여도 프로퍼티를 추가,수정,삭제가 가능하다.
//상수는 엄밀히 말하면 새로운 값을 할당하지 못하는 변수를 뜻하기 떄문이다.
const animal ={
    type:"고양이",
    name:"나비",
    color:"black",
};
// animal ={a:1}// 오류 발생


animal.age = 2; //추가
animal.name = "까망이"; //수정
delete animal.color; //삭제

// 2.메서드
// ->값이 함수인 프로퍼티를 뜻함
const person = {
    name : "곽도겸",
    sayhi : function(){
        console.log("hi");
    },
    //메서드 선언
    sayho() {
        console.log("ho");
    },
};
person.sayhi();