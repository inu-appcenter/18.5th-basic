// 1-11) 함수

// 함수 선언은 function 키워드
// function (함수명)(받을 매개변수의 이름) { (구문) }
function greeting() {
  console.log("안녕하세요");
}

console.log("함수 호출 전");
greeting(); // 함수 호출, 선언된 함수가 호출되어 내부 구문 동작, 콘솔에 "안녕하세요" 출력됨.
console.log("함수 호출 후");

// 매개변수를 받는 함수 예시
function getArea(width, height) {
  // 함수 안에 함수 작성 가능 (중첩 함수)
  function another() {
    console.log("another");
  }

  another(); // 함수 내부에서 함수 호출 가능
  let area = width * height; // 받은 매개변수로 연산 진행
  console.log(area);

  return area; // return 키워드를 이용하여 반환값을 명시. 값을 반환하고 종료
  // return문 밑으로 작성되는 구문은 실행되지 않는다.
}

getArea(10, 20); // 인수로 10과 20을 전달, 200 출력
getArea(30, 20); // 인수로 30과 20을 전달, 600 출력

let area1 = getArea(10, 20); // area1 변수에 200을 저장.
console.log(area1); // 200 출력

// JS에서는 함수의 선언을 호출보다 아래에 두어도 정상적으로 함수가 잘 동작한다. (호이스팅(Hoisting))
