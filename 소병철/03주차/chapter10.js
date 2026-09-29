// 2-10) Date 객체와 날짜
// 1. Date 객체를 생성하는 방법

// 생성자를 이용하여 만든다.
// 생성자에 아무런 인수도 전달하지 않으면 현재 시간을 기준으로 만들어진다.
let date1 = new Date();
console.log(date1); // 코드 실행 시각 출력
// (요일) (월) (일) (년도) HH:MM:SS GMT+0900 (한국 표준시) 형태로 출력

// 특정 날짜 기준이나 시간을 기준으로 만들고 싶다면 인수로 특정 날짜를 전달한다.
let date2 = new Date("2000-01-01"); // 또는 2000.01.01, 2000/01/01
console.log(date2); // 설정한 날짜 출력, 시간대는 GMT+9 하여 09시 고정 (한국 표준시)

// 시간을 넣어줄 땐 날짜 뒤에 / 넣고 시간대를 작성하면 된다.
// new Date("2000-01-01/12:34:56");
// 또는 모든 인수를 콤마로 구분하여 생성자에 집어넣을 수 있다.
// new Date(2000, 01, 01, 12, 34, 56);

// 2. 타임스탬프
// 특정 시간이 1970.01.01 00시 00분 00초(협정 세계시, UTC)로부터 몇 ms가 지났는지를 의미하는 숫자 값

// getTime 함수가 해당 Date 객체의 시간에 해당하는 타임스탬프를 계산하여 반환함.
let ts1 = date1.getTime();
console.log(ts1); // 대충 엄청 큰 정수 값이 출력된다.

// 새로운 Date 객체를 생성하는 데 사용할 수 있다.
let date3 = new Date(ts1); // 인수로 타임스탬프 값을 넘김
// 타임스탬프 값에 해당하는 값으로 객체 생성
console.log(date3); // date1과 똑같은 값을 출력함

// 3. 시간 요소들을 추출하는 방법
// 함수 이름이 되게 직관적이다.
let year = date1.getFullYear();
let month = date1.getMonth();
let date = date1.getDate();

let hour = date1.getHours();
let minute = date1.getMinutes();
let seconds = date1.getSeconds();

// 자바스크립트의 월은 0부터 시작한다. 1월이 0임 (인덱스같은 느낌)
console.log(year, month, date, hour, minute, seconds);
// 헷갈리지 않도록 getMonth() + 1을 항상 해 주도록 하자.
// let month = date1.getMonth() + 1;

// 4. 시간 수정하기
// 이것도 직관적이다. 함수의 인자로 수정하려는 값을 넣으면 됨.
date1.setFullYear(2025);
// 월 설정할 때 주의, 자바스크립트의 월은 0부터 시작하니 2를 넣으면 3월.
date1.setMonth(2);
date1.setDate(30);

console.log(date1); // 수정된 값이 출력됨

// 5. 시간을 여러 포맷으로 출력하기
// 현재 날짜만 출력하고 싶을 때: toDateString()
console.log(date1.toDateString());
// 영어 포맷이 아닌 우리나라 현지화된 포맷으로 출력하고 싶을 때: toLocaleString()
console.log(date1.toLocaleString()); // YYYY. M. DD. (오전/후) HH:MM:SS 형식으로 출력
