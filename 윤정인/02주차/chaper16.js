//1.상수개체 
const animal - {
  type: "고양이",
  name: "나비",
  color: "black",
}

animal.age = 2; //추가 
animal.name = "까망이"; //수정
delete animal.color; //삭제 

//console.log(animal);

//2.메서드
const person={
  name :"윤정인",
  //메서드 선언
  sayHi(){
    //console.log("안녕!");
  },
};

person.sayHi();
person["sayHi"]();