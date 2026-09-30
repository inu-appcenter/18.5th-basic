//1. Date 객체를 생성하는 방법
let date1 = new Date(); //생성자 //현재 시간
//console.log(date1);
 
let date2 = new Date("1997-01-07/10:10:10"); //- or .  or / 로 구분 가능. 
//1997, 1, 7, 23, 50, 50 도 가능.
//console.log(date2);

//2. 타임 스탬프
// 특정 시간이 "1970.01.01 00시 00분 00초"로 부터 몇 ms가 지났는지를 의미하는 숫자값
//1970.01.01 00시 00분 00초 를 UTC라고 부른다. 
//복잡한 형태를 가지고 있는 시간 정보를 간단한 숫자로 표현 가능.

let ts1 =date1.getTime(); //UTC부터 지난 시간
//console.log(ts1);

let date4 = new Date(ts1);
//console.log(date1, date4);

//3. 시간 요소들을 추출하는 방법
let year = date1.getFullYear();
let month = date1.getMonth()+1; //월이 0부터 시작. 1월은 0으로 나옴. 그래서 +1 해줘야됨.
let date = date1.getDate();

let hour = date1.getHours();
let minute = date1. getMinutes();
let seconds = date1.getSeconds();

//console.log(year, month, date, hour, minute, seconds);

//4. 시간 수정하기
date1.setFullYear(2023);
date1.setMonth(2);
date1.setDate(30);
date1.setHours(23);
date1.setMinutes(50);
date1.setSeconds(59);

console.log(date1);

//5. 시간을 여러 포맷으로 출력하기
console.log(date1.toDateString()); //시간제외 날짜만 출력
console.log(date1.toLocaleString()); //현지화된 형태로 시간 출력