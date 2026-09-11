// 1. 변수
// 값이 계속 변경될 수 있는 변수를 선언할 때 사용
// 재할당은 가능하지만 같은 이름으로 중복 선언은 불가능
let age = 27;
console.log(age);

age = 30;
console.log(age);

// 2. 상수
// 한 번 값을 할당하면 재할당이 불가능한 선언 방식
// 값이 변하지 안아야 하는 데이터를 정의할 때 사용
const birth = "1997.01.07";
console.log(birth);

// 3. 변수 명명규칙(네이밍 규칙)
// 3-1. $, _ 제외한 기호는 사용할 수 없다.
let $_name;

// 3-2. 숫자로 시작할 수 없다.
let name1;
let _2name;

// 3-3. 예약어를 사용할 수 없다.
// let let; // 예약어는 변수명으로 사용할 수 없다.

// 4. 변수 명명 가이드
let salesCount = 1;
let refundCount = 1;
let totalSalesCount = salesCount - refundCount;
