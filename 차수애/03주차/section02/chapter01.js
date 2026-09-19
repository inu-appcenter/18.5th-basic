// 1. Falusy한 값

let f1 = undefined;
let f2 = unll;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n; // 아주 큰 숫자를 저장하는데 쓰는 값

if (!f2){
    console.log("f");
}

//2. Truthy 한 값
// 7가지 falsy 한 값을 제외한 나머지 모든 값

let t1 = "hello"; // 비어있지 않은 문자열
let t2 = 123; // 0이 아닌 숫자
let t3 = []; // 배열
let t4 = {} // 객체
let t5 = () => {}; // 화살표 함수

if(t4){
    console.log("T");
}

//3. 활용 사례

function printname(person){
    if (!person) { //person이 falsy한 값이면 실행
        console.log("person의 값이 없음");
        return;
    }
    console.log(person.name);
}

let person = {name: "이정환"};
printname(person);


