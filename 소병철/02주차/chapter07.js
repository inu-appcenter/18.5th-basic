// 1-7) 연산자 1
// 1. 대입 연산자 (=)
// 값을 저장할 변수 = 저장할 값
let var1 = 1;

// 2. 산술 연산자
// 사칙연산 + 나머지(모듈로) 연산
// 덧셈 뺄셈보다 곱셉, 나눗셈, 모듈로 연산자의 우선순위가 높다.
let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2;

let num6 = 1 + 2 * 10; // 곱셈부터 진행(우선순위), 21
console.log(num6);

// 3. 복합 대입 연산자
// 산술 연산자와 대입 연산자가 복합되어 있는 연산자
let num7 = 10;
num7 += 20; // == num7 = num7 + 20;

// 4. 증감 연산자
// 값을 1씩 늘리거나 줄일 때 사용한다.
let num8 = 10;
num8++; // 11

// 작성 위치에 따라 값이 변하는 시점이 달라진다.
console.log(num8++); // 11이 출력되나, 이 라인이 끝나면 num8의 값은 12가 됨.
console.log(++num8); // 12에서 1 증가된 값인 13이 출력된다.

// 5. 논리 연산자
// Boolean 타입의 값을 다룰 때 사용하는 연산자.
let or = true || false; // true, 하나라도 true면 true
let and = true && false; // false, 둘 다 true여야 true
let not = !true; // false, 반전

// 6. 비교 연산자
let comp1 = 1 === 2; // false, 동등 비교 연산자
let comp2 = 1 !== 2; // true, 비동등 비교 연산자 (다르면 true)

// 다른 언어와 달리 =을 3개 쓰는 이유
// 두 개만 써도 가능은 하나, 값의 자료형까지 비교하지 않고 값 자체만으로 비교한다.
let comp3 = 1 == "1"; // true, 자료형이 다름에도 값이 1로 같아 true가 나옴.
let comp4 = 1 === "1"; // false, 자료형까지 비교함.

// 대소 비교
let comp5 = 2 > 1; // true
let comp6 = 2 < 1; // false
// >=, <=로 이상, 이하를 표현할 수 있다.
