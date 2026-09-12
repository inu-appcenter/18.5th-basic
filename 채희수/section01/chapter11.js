// 함수선언

function greeting() {
  console.log("안녕하세요");
}
console.log("호출 전");
greeting(); // 안녕하세요
console.log("호출 후");

function getArea(width, height) { // (width, height) -> 매개변수
  function another() { // 중첩 함수
    console.log("another");
  }

  another(); // another 호출

  let area = width * height;
  
  // console.log(area);
  return area; // return은 함수의 결과값을 반환하는 키워드, area는 반환값
  console.log("hello"); // return 이후의 코드는 실행되지 않음
}

// getArea(10, 20); // 200 (10, 20) -> 인수
let area1 = getArea(10, 20); // 200
console.log(area1); // 200

// getArea(30,20); // 600
let area2 = getArea(30, 20); // 600
console.log(area2); // 600

getArea(120,200); // 24000

// 호이스팅
// -> 끌어올리다 라는 뜻
// -> 함수 선언문은 아래에 있어도 호이스팅이 발생하여 함수 선언문보다 먼저 호출 가능

// function getArea(width, height) { // (width, height) -> 매개변수
//   function another() { // 중첩 함수
//     console.log("another");
//   }

//   another(); // another 호출

//   let area = width * height;
  
//   // console.log(area);
//   return area; // return은 함수의 결과값을 반환하는 키워드, area는 반환값
//   console.log("hello"); // return 이후의 코드는 실행되지 않음
// }