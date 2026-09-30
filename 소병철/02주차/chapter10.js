// 1-10) 반복문

// for (초기식; 조건식; 증감식)
// idx라는 카운터 변수가 0부터 5 미만인 동안 1씩 늘려가며 반복한다.
for (let idx = 0; idx < 10; idx++) {
  console.log("반복");

  // 특정 회차의 반복문을 건너뛰고 싶다면 continue;를 이용한다.
  if (idx % 2 === 0) {
    continue;
  }
  // idx가 1, 3, 5일 때만 콘솔에 idx값이 출력된다.
  console.log(idx);

  // 조건식이 거짓이 되지 않았을 때 강제 종료하려면 break;를 이용한다.
  if (idx >= 5) {
    break;
  }
}
