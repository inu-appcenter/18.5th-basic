// console.log : 자바의 System.out.println()과 같이 콘솔에 해당 문자열을 출력하는 역할을 한다.
console.log("Hello, JavaScript");

// 1-4) 변수와 상수
// 1. 변수
// let 키워드를 붙여 변수를 선언한다.
let name = "소병철"; // 선언과 동시에 초기화
console.log(name);

name = "베이직"; // 값을 자유롭게 변경 가능
console.log(name);

let age; // 선언과 동시에 초기화하지 않아도 괜찮다.
console.log(age); // 초기화하지 않은 변수를 출력했을 경우 undefined라는 문구가 출력.
// let age = 23; 중복된 이름의 변수를 다시 선언 불가능,
// Uncaught SyntaxError: Identifier 'age' has already been declared

// 2. 상수
// const 키워드를 붙여 상수를 선언한다.
// 초기화 이후 값을 다시 바꿀 수 없으며, 선언과 동시에 초기화하는 것이 필수적이다.
const birth = "2004.04.27";

// const bloodType; 선언만 하고 초기화하지 않는 것은 불가능
// Uncaught SyntaxError: Missing initializer in const declaration

// birth = "1234"; 상수의 값은 변경 불가능
// Uncaught TypeError: Assignment to constant variable.

// 변수/상수 네이밍 규칙
// 1. $, _를 제외한 기호는 사용할 수 없다.
// 2. 변수명은 숫자로 시작할 수 없다.
