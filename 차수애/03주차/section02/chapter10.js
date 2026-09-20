// 1. date 객체를 생성하는 방법

let date1 = new Date(); // 현재시간 출력
console.log(date1);

let date2 = new Date("1997-01-07 / 10:10:10 "); // ., /, - 다 가능
console.log(date2);

// 2. 타임 스탬프
// 특정 시간이 utc로 부터 몇 ms가 지났는지 의미하는 숫자값

let ts1 = date1.getTime(); // date1에 해당하는 타임스탬프를 계산해서 반환
let date4 = new Date(ts1); // date1과 시간 똑같아짐

//3. 시간요소들을 추출하는 방법
let year = date1.getFullYear(); // 연도
let month = date1.getMonth() +1 ; // 달
let seconds = date1.getSeconds(); // 초

//4. 시간 수정
date1.setFullYear(2022);
date1.setMonth(2);

//5. 시간을 여러 포맷으로 출력하기
console.log(date1.toDateString()); // 날짜만 출력
console.log(date1.toLocaleDateString()); // 우리나라 현지화된 형태로 시간 출력