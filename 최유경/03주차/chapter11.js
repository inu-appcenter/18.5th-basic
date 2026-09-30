// 동기
console.log(1);
console.log(3);
// 1
// 3

//비동기
console.log(1);
//원하는 코드를 특정 시간이 지난 이후에 비동기적으로 실행시켜주는 함수
setTimeout(() => {
  console.log(2);
}, 3000); //3000ms지난 후 첫 번째 인수인 콜백함수 실행
console.log(3);

// 1
// 3
// 2 <-3초가 지난 후 뒤늦게 출력

