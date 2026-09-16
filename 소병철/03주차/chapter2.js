// 2.2) 단락 평가
// 1. 단락 평가란?
// 간단한 논리 연산식을 수행하는 코드를 작성해 보자:
function returnFalse() {
  return false;
}
function returnTrue() {
  return true;
}

// 두 함수를 통한 연산 결과가 false기 때문에 당연히 false가 출력된다.
console.log(returnFalse() && returnTrue());

// 각각의 함수에 기능을 더해보자.
function returnFalse2() {
  console.log("False 함수");
  return false;
}
function returnTrue2() {
  console.log("True 함수");
  return true;
}

// 콘솔에 "False 함수"라는 문자열과 연산의 수행 결과인 false가 출력된다.
// "True 함수" 문자열은 어디 갔을까?
console.log(returnFalse2() && returnTrue2());
// AND 연산에서 첫 번째 피연산자가 false이기 때문에 단락 평가가 작동,
// 뒤의 returnTrue2() 함수에는 접근조차 하지 않고 연산이 끝난 것.
// 자리를 바꾸면 단락 평가가 미작동, 두 함수 모두가 출력된다.

// OR 연산을 해 보자.
// 마찬가지로 단락 평가가 작동, 첫 번째 피연산자가 true이기 때문에 OR 연산의 결과가 true로 확정.
// 뒤의 returnFalse2() 함수에는 접근조차 하지 않고 연산이 끝난다.
console.log(returnTrue2() || returnFalse2());

// 굳이 Boolean 값이 아니더라도 Truthy한 값과 Falsy한 값을 이용한 논리 연산에서도 작동한다.

// 단락 평가 활용 사례
function printName(person) {
  // 챕터 1에서 만든 건데, 단락 평가를 이용하면 이하 조건이 필요 없다.
  // if (!person) {
  //   console.log("person의 값이 없음");
  //   return;
  // }
  console.log(person && person.name); // person이 Falsy하다면 이름이 출력이 안 됨.
}

// 매개변수로 아무 것도 전달하지 않았을 때:
printName(); // undefined가 출력.
printName({ name: "이름" }); // "이름"이 정상적으로 출력

// 또 한 번 멋있게 개선을 할 수 있다.
function printName2(person) {
  // name 프로퍼티가 있다면(Truthy하다면) 이를 name 상수에 담음
  const name = person && person.name;
  // 이후 or 연산의 단락 평가를 이용, name이 Truthy한 문자열이라면 그대로 이름이 출력
  console.log(name || "person의 값이 없음");
}

printName2(); // "person의 값이 없음"이 출력
printName2({ name: "이름" }); // "이름"이 정상적으로 출력
