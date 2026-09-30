// for (초기식;조건식;증감식)

for (let idx = 1; idx <= 10; idx++) {
  if (idx % 2 === 0) {
    continue; 
    // 아래 있는 코드를 실행하지 않고 다음 회차로 넘어간다.
  }
  console.log(idx);

  if (idx >= 5) {
    break;
  }
}