// 1.변수
let age =27;
age=30;

// 2.상수
const birth ="2006.01.31";

// 3.변수 명명규칙(네이밍 규칙)
// 3-1. $,_ 제외한 기호는 사용할 수 없다
// let #name -- 안됨
// let $_name -- 가능

//3-2. 숫자로 시작할 수 없다.
//let 3name -- 안됨
//let $3name -- 가능

//3-3.예약어를 사용할 수 없다.
//let let -- 안됨 

// 4. 변수 명명 가이드
let a=1;
let b=2;
let c= a-b;
//위와 같은 명명은 좋지 않음
let salesCount=1;
let refundCount=2;
let totalSalesCount= salesCount-refundCount;
//목적을 명시하는 변수 명으로 할것