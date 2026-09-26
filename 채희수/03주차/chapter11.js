console.log(1);

// 비동기 함수는 web APIS에 가서 함수를 대신 실행 콜백함수도 같이 넘김 콜백함수를 다시 돌려줌
setTimeout(()=>{ 
  console.log(2);
}, 3000); // 3초 뒤 2가 출력

console.log(3);
// 1, 3 출력 3초뒤 2가 출력
