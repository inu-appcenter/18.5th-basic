// 1. 대입 연산자
let num = 10;

// 2. 산술 연산자
let num1 =  3 + 2;
let num2 =  3 - 2;
let num3 =  3 * 2;
let num4 =  3 / 2;
let num5 =  3 % 2; //나머지 연산자

let num6 =  1 + 2 * 10; //곱셈이 먼저 수행된다.
console.log(num6);

// 3. 복합 대입 연산자 (산술 + 대입)
let num7 = 10;
num7 += 5; // num7 = num7 + 5;
num7 -= 5; // num7 = num7 - 5;
num7 *= 5; // num7 = num7 * 5;
num7 /= 5; // num7 = num7 / 5;
console.log(num7);

// 4. 증감 연산자
let num8 = 10;
console.log(--num8); // 전위 연산
console.log(num8++); // 후위 연산
console.log(num8);

// 5. 논리 연산자

let or = true || false; 
let and = true && false;
let not = !true;

console.log(or);
console.log(and);
console.log(not);

// 6. 비교 연산자
let comp1 = 1 === "1"; //타입까지 비교
let comp2 = 1 != 2; //값만 비교
console.log(comp1);
console.log(comp2);

let comp3 = 1 > 2;
let comp4 = 1 < 2;

let comp5 = 1 >= 2;
let comp6 = 1 <= 2;