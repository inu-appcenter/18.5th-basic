// 스코프
// -> 전역(전체 영역) 스코프 / 지역(특정 영역) 스코프
// -> 전역 스코프 : 전체 영역에서 접근 가능
//-> 지역 스코프 : 특정 영역에서만 접근 가능

let a = 1; //전역 스코프
function funcA(){
  let b = 2; //지역 스코프
  console.log(a);
  function funcB(){}//지역 스코프
}
funcA();
//console.log(b); //오류

if (true){
  let c = 1; //지역 스코프
}

for (let i = 0; i < 10; i++){
  let d = 1; //지역 스코프
  function funcB(){} //지역 스코프x
} 

// ==> 중관호안에 선언된 변수들은 모두 다 지역 스코프를 갖는다.

