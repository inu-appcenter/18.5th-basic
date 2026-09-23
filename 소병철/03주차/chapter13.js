// 2-13) 비동기 작업 처리하기 2. Promise
// 비동기 작업을 효율적으로 처리할 수 있도록 도와주는 자바스크립트 내장 객체

// 생성자를 통해 생성, 인수로는 비동기 작업을 실제로 진행할 콜백함수를 넣는다.
// Promise 객체가 생성됨가 동시에 자동으로 콜백함수 호출, 내부의 비동기 작업을 실행함.
let promise = new Promise(() => {
  // 내부의 콜백 함수를 executor 함수라고 부름
  setTimeout(() => {
    console.log("안녕");
  }, 2000);
});

// Promise 객체를 출력. 상태와 결과를 확인할 수 있다.
// 결과가 전달되기 전에 출력이 먼저 되기에 상태는 pending, 결과는 undefined.
console.log(promise);

// Executor 함수에는 두 가지 매개변수가 전달, resolve와 reject.
// resolve: 비동기 작업을 성공 상태로 바꾸는 함수
// reject: 실패 상태로 바꾸는 함수
// 함수 내부에 결과값을 담는다.
promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("안녕");
    resolve("안녕"); // 성공했다고 알리고 싶다면 resolve 함수를 호출.
  }, 2000);
});

setTimeout(() => {
  // 2초보다 느리게 promise 객체를 출력하여 상태 확인.
  // [[PromiseState]]: "fulfilled"
  // [[PromiseResult]]: "안녕"
  console.log(promise);
}, 3000);

promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("실패의 이유");
  }, 2000);
});

// reject 함수를 이용해 실패 상태를 전달할 경우
setTimeout(() => {
  promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      // 실패 시 오류 메시지도 함께 출력됨.
      // Uncaught (in promise) 실패의 이유
      reject("실패의 이유");
    }, 2000);

    setTimeout(() => {
      console.log(promise);
    }, 3000);
  });
}, 3000);

// 결과 값을 이용까지 해 보자, then 메서드
let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const num = 10;
    if (typeof num === "number") {
      resolve(num + 10);
    } else {
      reject("num이 숫자가 아닙니다.");
    }
  }, 6000);
});

// resolve를 호출하게 되면 그 후에 then 메서드의 콜백 함수를 호출.
// reject가 호출되었을 경우 then 메서드가 실행되지 않음.
promise2.then((value) => console.log(value));

// 실패 시에는 catch 메서드를 활용
promise2.then((error) => console.log(error));

// then
// 둘이 연결하여 사용 가능 (Promise Chaining)
promise2
  .then((value) => console.log(value))
  .catch((error) => console.log(error));
