//1. Date 객체를 생성하는 방법
let date1 = new Date(); // new 키워드와 함께 새로운 객체를 생성하는 내정함수 => 생성자
console.log(date1); //현재 시간

let date2 = new Date("1997-01-07/10:10:10"); //1997.01.07 , 1997/01/07 도 상관없음
// let date2 = new Date(1997, 1, 7, 10, 10, 10);
console.log(date2); // 특정 날짜/시간

//2. 타임 스탬프
// 특정 시간이 "1970.01.01 00시 00분 00초"로 부터 몇 ms가 지났는 지를 의미하는 숫자값

//"1970.01.01 00시 00분 00초"(협정세계시=UTC) 세계모든 나라가 표준으로 사용하는 시간이 시작되는 지점

let ts1 = date1.getTime();
console.log(ts1);

let date4 = new Date(ts1);
console.log(date1, date4);
// 복잡한 시간 정보를 간단한 숫자로 표현 가능

//3. 시간 요소들을 추출하는 방법
let year = date1.getFullYear();
let month = date1.getMonth() + 1; //JS의 월은 0부터 시작
let date = date1.getDate();

let hour = date1.getHours();
let minute = date1.getMinutes();
let seconds = date1.getSeconds();

console.log(year, month, date, hour, minute, seconds);

//4. 시간 수정하기

date1.setFullYear(2006);
date1.setMonth(7); // 7을 인수로 전달하면 8월
date1.setDate(23);
date1.setHours(23);
date1.setMinutes(59);
date1.setSeconds(59);

console.log(date1);

//5. 시간을 여러 포멧으로 출력하기
console.log(date1.toDateString()); //날짜만 출려
console.log(date1.toLocaleString()); //현지화된 형태로 시간 출력

