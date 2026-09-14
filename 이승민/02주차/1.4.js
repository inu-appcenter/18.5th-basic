// 1. 변수
let age = 23; // 변수 선언
// let age; << undefined
// let age = 30; << 재선언 X
age = 30;

// 2. 상수
const birth = "2004.03.02";
// birth = "123"; << 상수 변경 X
// const birth;  << 상수는 반드시 초기화

// 3. 변수 명명규칙(네이밍 규칙)
// 3-1 $, _ 제외한 기호 사용 X
// 3-2 숫자로 시작 X
// 3-3 예약어 사용 X || ex)let, if
// 4. 변수 명명 가이드
let salesCount = 1;
let refundCount = 1;
let totalSalesCount = salesCount - refundCount;
