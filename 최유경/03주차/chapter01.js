//1. Falsy한 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n;  //Big Integer: 아주아주 큰 숫자를 저장하는 데 사용되는 값

if (!f1) {
  console.log("falsy");
}

//2. Truthy한 값
//->7가지의 Falsy한 값들을 제외한 나머지 모든 값
let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => { };

if (t4) {
  console.log("truthy");
}

//3. 활용 사례

function printName(person) {
  if (person === undefined) {
    console.log("person의 값이 없음")
    return;
  }
  console.log(person.name);
}
let person; //person값이 undefined되었다고 가정
printName(person);

//근데 만약 person의 값이 null이라면?
// 또다시 오류가 발생하는 걸 방지하기 위해 조건문이 복잡해진다. 
/*
function printName(person) {
  if(person===undefined || person===null) {
    console.log("person의 값이 없음")
    return;
  }
  console.log(person.name);
}
let person = null; 
printName(person); 
*/

function printName(person1) {
  if (!person1) {
    console.log("person1의 값이 없음")
    return;
  }
  console.log(person1.name);
}
let person1 = null;
printName(person); 
