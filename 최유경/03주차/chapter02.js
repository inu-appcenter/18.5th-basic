
function returnFalse() {
  console.log("False 함수");
  return false;
}

function returnTrue() {
  console.log("True 함수");
  return true;
}

console.log(returnFalse() && returnTrue()); //단락평가O
console.log(returnTrue() && returnFalse()); //단락평가X


//단락평가는 boolean값 뿐만아니라 truthy한 값이나 falsy한 값에도 적용이 됨
function returnFalse() {
  console.log("False 함수");
  return undefined; //falsy한 값
}

function returnTrue() {
  console.log("True 함수");
  return 10;   //truthy한 값
}

console.log(returnTrue() || returnFalse()); //단락평가O

//논리연산자식에 falsy하거나 truthy한 값이 쓰였을 때는 연산의 결과가 truthy하거나 falsy한 값 그 자체가 되어버려서 undefined나 10 그대로 출력된다.

//단락 평가 활용 사례
function printName(person) {
  console.log(person && person.name);  //단락평가 적용
}
printName(); //undefined

function printName(person) {
  const name = person && person.name  //단락평가
  console.log(name || "person의 값이 없음");
}
printName(); //undefined -> 결과값은 truthy한 문자열이 반환
printName({ name: "최유경" }); //-> 둘 다 true일 때는 첫 번째 truthy한 값이 반환

// T || T => 첫 번째 truthy한 값 반환
// T && T => 두 번째 truthy한 값 반환


