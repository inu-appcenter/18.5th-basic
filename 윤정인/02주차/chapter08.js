//연산자2 (특수)
//1. null 병합 연산자

let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2;
let var5 = var1 ?? var3;
//console.log(var5); //20
let var6 = var2 ?? var3;
//console.log(var6); 먼저 있는 var2 

let userName = "윤정인";
let userNickName = userName ?? userNickName;
//console.log(displayName);

//2. typeof 연산자
let var7 = 1;
var7 = "hello";
var7 = true;

let t1 = typeof var7;
//console.log(t1);

//3. 삼항 연산자 
let var8 = 10;
//요구사항 : 변수 res에 var8의 값이 짝수 ->"짝", 홀수 ->"홀"
let res = var8 % 2 ===0 ? "짝수" : "홀수";
//console.log(res);