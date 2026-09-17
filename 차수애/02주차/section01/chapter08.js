// 1. null 병합 연산자

let ver1;
let ver2 = 10;
let ver3 = 20;

let ver4 = ver1 ?? ver2; //ver1이 null 또는 undefined이면 ver2를 반환
let ver5 = ver1 ?? ver2 ?? ver3;
let ver6 = ver2 ?? ver3 ;

console.log(ver6);

let username = "이정환";
let usernickname = "winter";

let userdisplayname = usernickname ?? username;
console.log(userdisplayname);

//2. typeof 연산자

let var7 = 10;
var7 = "hello";

let t1 = typeof var7; //string
console.log(t1);

// 3. 삼항 연산자

let var8 = 10;
let les = var8 % 2 === 0 ? "짝수" : "홀수"; //조건식 ? 참일때 : 거짓일때
console.log(les);