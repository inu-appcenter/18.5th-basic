// 1. falsy 한 값
// 총 7가지 종류

let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n;

// 2. Truthy한 값
// -> 7가지 falsy 한 값을 제외한 모든 값

let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

if (t4) {
  console.log("Truthy");
}

// 3. 활용 사례

function printName(person) {
  if (!person) {
    console.log("값이 존재하지 않음");
  }
  console.log(person.name);
}

let person;

printName(person);
