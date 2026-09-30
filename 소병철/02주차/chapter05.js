// 1-5) 자료형
// 1. Number Type
// 존재할 수 있는 모든 숫자 값들을 다 포함한다.
let num1 = 27;
let num2 = 1.5;
let num3 = -20;
// 정수, 실수, 음수 전부 Number 타입에 포함.

// 기본적인 사칙연산을 지원한다.
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);

// 숫자로 보이지 않는 독특한 값들
let inf = Infinity; // 양의 무한대
let mInf = -Infinity; // 음의 무한대
let nan = NaN; // Not a Number, 수치 연산이 실패했을 때의 결과값
console.log(1 * "Hello"); // NaN 출력.

// 2. String Type
// 문자열을 의미하는 자료형.
let myName = "소병철";

// 값을 큰 따옴표나 작은 따옴표로 감싸 주어야 한다.
// let nameInputError = 소병철;
// Uncaught ReferenceError: 소병철 is not defined

// 문자열의 덧셈 연산을 지원한다.
let myLocation = "광명";
let introduce = myName + myLocation; // introduce == "소병철광명"
console.log(introduce);

// Backtick이라는 것을 이용해서도 문자열을 만들 수 있다. (템플릿 리터럴 문법)
// 기본적으로 쌍따옴표로 만든 것과 동일하지만, 변수의 값을 동적으로 문자열에 집어넣을 수 있다.
let introduceText = `${myName}은 ${myLocation}에 거주합니다.`;
console.log(introduceText);

// 3. Boolean Type
// 참, 거짓을 저장하는 타입. 상태를 의미하는 데 주로 사용된다.
let isSwitchOn = true;
let isEmpty = false;

// 4. Null Type
// 변수에 어떠한 값도 담겨 있지 않음을 표현할 때 사용.
let empty = null;

// 5. Undefined Type
// undefined라는 단 하나의 값만을 포함하는 특수한 타입.
// 변수 선언만 하고 초기화하지 않았을 때 자동으로 할당된다.
// null은 명시적으로 할당해야 하고,
// undefined는 초기화하지 않았거나 존재하지 않는 값을 불러오려고 할 때 발생할 수 있다.
let none;
console.log(none); // undefined
