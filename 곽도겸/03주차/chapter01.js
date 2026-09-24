// 1. Falsy한 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n; // big integer 라는 특수자료형, 아주큰 숫자를 저장하는데 사용

// 2. Truthy한 값
// -> 7가지 Flasy한 값을 제외한 나머지 모든 값
let t1 = "hello"; 
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

function printName(person){
    if (!person){
        console.log("person의 값이 없음");
        return;
    }
    console.log(person.name);
}

let person = {name : 곽도겸};
printName(person);
//위 코드의 경우 person값이 없는 경우에 오류가 생기므로 예외 처리를 해주어야 하는데 그때 Falsy한 값의 특징을 이용해서 코드 작성해주면 간단해진다.