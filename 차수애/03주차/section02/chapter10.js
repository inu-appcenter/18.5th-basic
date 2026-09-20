// 1. date 객체를 생성하는 방법

let date1 = new Date(); // 생성자
console.log(date1);

let date2 = new Date("1997-01-07 / 10:10:10 "); // ., /, - 다 가능
console.log(date2);

// 2. 타임 스탬프
// 특정 시간이 utc로 부터 몇 ms가 지났는지 의미하는 숫자값

let ts1 = date1.getTime();