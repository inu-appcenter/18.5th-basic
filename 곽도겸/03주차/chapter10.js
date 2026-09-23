// 1. Date 객체를 생성하는 방법
let date1 = new Date() // 생성자 //현재 시간을 출력

let data2 = new Date(1997,1,7,10,10,10);// -대신 / 사용해도된다 , 문자열 말고 숫자 , 로 사용해도된다.

//2. 타임 스탬프
//특정 시간이 "1970.01.01 00시 00분 00초"로 부터 몇 ms가 지났는지를 의미하는 숫자값
//1970.01.01 00시 00분 00초 는 UTC(협정세계시)

let ts1 = date1.getTime();

let date4 = new Date(ts1);//타임 스탬프를 이용할수도 있음

//3. 시간 요소들을 추출하는 방법
let year = date1.getFullYear();//연도
let month = datel. getMonth() + 1;//월 , js의 월은 0월 부터 시작
let date = date1.getDate();//일

let hour = date1.getHours();//시간
let minute = date1.getMinutes();//분
let seconds = date1.getSeconds();//초

// 4. 시간 수정하기
date1.setFullYear(2023);
date1.setMonth(2);//실제로는 3월이다.
date1.setDate(30);
date1.setHours(23);
date1.setMinutes(59);
date1.setSeconds(59);

// 5. 시간을 여러  포멧으로 출력하기
console. log(date1.toDateString());
console. log(date1.toLocaleString());