// 1. number Type
let num = 10;
let num2 = 3.14;
let num3 = -20;

console.log(num + num3);
console.log(num - num3);
console.log(num * num3);
console.log(num / num3);
console.log(num % num3); //나머지 연산자

let inf = infinity; //양의 무한대
let ninf = -infinity; //음의 무한대

let nan = NaN; // 수치연산이 실패했을 때 결과값
console.log(1 * "hello"); 


//2. string Type
let myName = "홍길동";
let myLocation = "서울시 강남구";
let introduce = myName + " " + myLocation;

let introduce2 = `${myName} ${myLocation}`; //템플릿 리터럴

//3. boolean Type
let isTrue = true;
let isFalse = false;

//4. null Type
let empty = null; //값이 비어있음을 명시적으로 나타낼 때 사용

//5. undefined Type
let none;
console.log(none); //값이 할당되지 않은 상태