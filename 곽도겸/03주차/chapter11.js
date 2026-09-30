console. log(1);

setTimeout(() => {
console. log(2);
}, 3000);//3000ms 이후에 실행, 비동기적 함수

console. log(3);
// 자바스크립트는 스레드가 하나라 비동기 작업들은 Web APIs에서 실행이 된다
//Web APIs 은 웹 브라우저가 직접 관리하는 별도의 영역이다