// 1. 대입 연산자
let var1 = 1;

// 2. 산술 연산자
let num1 = 3 + 2; // 더하기
let num2 = 3 - 2; // 빼기
let num3 = 3 * 2; // 곱하기
let num4 = 3 / 2; // 나누기
let num5 = 3 % 2; // 나머지

let num6 = 1 + 2 * 10; // 21
console.log(num6);

let num = (1 + 2) * 10; // 30
console.log(num);

// 3. 복합(산술 + 대입) 대입 연산자
// 연산 후 결과를 자기 자신에 재할당
let num7 = 10;
num7 += 20; // num7 = num7 + 20;
num7 -= 20; // num7 = num7 - 20;
num7 *= 20; // num7 = num7 * 20;
num7 /= 20; // num7 = num7 / 20;
num7 %= 10; // num7 = num7 % 10;
console.log(num7);

// 4. 증감 연산자
// 변수의 값을 1증가시키거나 감소
let num8 = 10;
num8++; // num8 = num8 + 1;
num8--; // num8 = num8 - 1;
console.log(num8++); // 전위 연산, 10출력 후 11이 됨
console.log(num8); // 11
console.log(++num8); // 후위 연산, 12가 된 후 12 출력

// 5. 논리 연산자
// 여러 조건식을 조합하거나 결과를 반전
let or = true || false; // or 연산자(||) | 둘 중 하나라도 true면 true

let and = true && false; // and 연산자(&&) | 둘 다 true여야 true

let not = !true; // not 연산자(!) | true <-> false로 바뀜

console.log(or, and, not); // ture, false, false

// 6. 비교 연산자
// 두 값을 비교하여 참(true) 또는 거짓(false)을 반환
let comp1 = 1 === "1"; // ==을 써서 비교하면 자료형까지는 비교 불가 
// ===은 값과 자료형까지 비교 가능
let comp2 = 1 !== 2;
console.log(comp1, comp2); // false, true

let comp3 = 2 > 1;
let comp4 = 2 < 1;
console.log(comp3, comp4); // true, false

let comp5 = 2 >= 2;
let comp6 = 2 <= 2;
console.log(comp5, comp6); // true, true
