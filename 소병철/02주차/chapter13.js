// 1-13) 콜백 함수

// 1. 콜백 함수
// 자신이 아닌 다른 함수에 인수로서 전달된 함수를 의미한다.

// 매개변수를 받아 콘솔에 출력하는 함수
function main(value) {
  console.log(value);
}

function sub() {
  console.log("i am sub");
}

main(sub); // 함수 자체를 인수로 넘김, sub 함수 자체가 출력.

function main2(value) {
  value(); // 받은 매개변수를 호출
}

main2(sub); // sub 함수가 main2 함수 내부에서 호출되어 "i am sub"가 출력된다.

// 화살표 함수를 인수로 전달할 수 있다.
main2(() => {
  console.log("i am sub"); // main2(sub);와 동일한 방식으로 출력.
});

// 2. 콜백 함수의 활용
function repeat(count) {
  for (let idx = 1; idx <= count; idx++) {
    console.log(idx);
  }
}

function repeatDouble(count) {
  for (let idx = 1; idx <= count; idx++) {
    console.log(idx * 2);
  }
}

repeat(5); // 1부터 5까지 순차 출력됨
repeatDouble(5); // 2부터 10까지 출력됨

// 구조가 비슷한 함수를 여러 개 만들기는 비효율적. 이 때 콜백함수를 이용한다.
function repeatWithCallback(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx); // 내부에서 콜백 함수를 호출함
  }
}

// 이대로 하면 위에서 만든 repeat() 함수와 동일한 역할
repeatWithCallback(5, function (idx) {
  console.log(idx);
});

// idx * 2만 해주면 위에서 만든 repeatDouble()과 동일한 역할을 하게 할 수 있다.
repeatWithCallback(5, function (idx) {
  console.log(idx * 2);
});
