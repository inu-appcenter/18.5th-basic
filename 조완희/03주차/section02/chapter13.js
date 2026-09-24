function add10(num) {
  const promise = new Promise((resolve, reject) => {
    // 비동기 작업 실행하는 함수
    //executor

    setTimeout(() => {
      //    const num = null; // 이 값을 숫자 or null로 해서 해볼 것.

      if (typeof num === "number") {
        resolve(num + 10);
      } else {
        reject("num is not type of Number");
      }
    }, 2000);
  });
  return promise;
}

add10(0)
  .then((result) => {
    console.log(result);
    return add10(result);
  })
  .then((result) => {
    console.log(result);
  });

//then 메서드
// -> 그 후에, 콜백함수의 인자까지도 전달해준다.

// promise.then((value) => {
//   console.log(value);
// });

// reject의 then 버전

// promise.catch((error) => {
//   console.log(error);
// });

// promise 체이닝
// promise.then((value) => {
//   console.log(value);
// })
// .catch((error) => {
//   console.log(error);
// });
