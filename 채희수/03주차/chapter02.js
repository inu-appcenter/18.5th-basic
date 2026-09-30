function returnFalse() {
  console.log("Fasle 함수");
  // return false;
  return undefined; // 참과 거짓이 아닌것도 가능
}

function returnTrue() {
  console.log("True 함수");
  // return true;
  return 10;
}

console.log(returnFalse() && returnTrue());
console.log(returnTrue() && returnFalse()); // 단락평가 작동 X
console.log(returnTrue() || returnFalse());

// 단락 평가 활용 사례

function printName(person) {
  const name = person && person.name;
  console.log(name || "person의 값이 없음");
  // undefined || truthy면 thruth한 값 반환
  // truthy || truthy 이면 첫번째 turthy을 반환
  // thruthy && truthy 이면 두번째 truthy을 반환
}

printName();
printName({name: "이정환"});

