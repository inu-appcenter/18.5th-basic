// 1. Number Type
// 정수와 소수점을 가리지 않고 모든 숫자를 처리함
let num1 = 27;
let num2 = 1.5;
let num3 = -20;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2); // 모듈러 연산

let inf = Infinity; // 무한대
let negInf = -Infinity; // 음의 무한대

let nan = NaN; // Not a Number

console.log(1 / 0);      // Infinity
console.log(-1 / 0);     // -Infinity
console.log(1*"hello"); // NaN

// 2. String Type
// 작은따옴표(’), 큰따옴표(”)로 감싼 문자 데이터
let myName = "이정환";
let myLocation = "목동";
let introduce = myName + myLocation;
console.log(introduce);

// 템플릿 리터럴 문법
let introduceText = `${myName}은 ${myLocation}에 거주합니다.`;
console.log(introduceText);

// 3. Boolean Type
// 논리적인 참과 거짓을 나타내는 true 또는 false 값
let isSwitchOn = true;
let isEmpty = false;

//underfined 랑 null 차이

// 4. Null Type (아무것도 없다)
// 개발자가 의도적으로 값이 없음을 명시할 때 직접 할당하는 값
let empty = null;

// 5. Undefined Type (정의되지 않았다)
// 변수를 선언했지만 값이 할당되지 않아 비어 있는 상태를 의미, 자바스크립트 엔진이 자동으로 부여
let none;
console.log(none); // undefined

