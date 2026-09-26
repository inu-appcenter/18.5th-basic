
// const promise = new Promise((resolve, reject) => {
//   //비동기 작업을 실행하는 함수
//   //executor

//   setTimeout(() => {
//     console.log("안녕");
//     resolve("안녕"); //인수로 promise의 결과값을 전달
//     //reject("왜 실패했는 지 이유...");
//   }, 2000);

// });

// console.log(promise); // pending
// setTimeout(() => {
//   console.log(promise); // fulfuiled
// }, 3000)


// promise함수 이용 방법
const promise = new Promise((resolve, reject) => {

  setTimeout(() => {
    const num = 10;

    if (typeof num === 'number') {
      resolve(num + 10);
    } else {
      reject("num이 숫자가 아닙니다.");
    }
  }, 2000);

});

console.log(promise); // pending
setTimeout(() => {
  console.log(promise); // fulfuiled
}, 3000)



//then 메서드
//-> 그 후에
promise.then((value) => {
  console.log(value);
})

// reject라면 then메서드는 실행X
// 이때는 catch 메서드 사용
promise.catch((error) => {
  console.log(error);
})



// 프로미스 체이닝(Promise chaining)
// promise
// .then((value) => {
//   console.log(value);
// })
// .catch((error) => {
//   console.log(error);
// })

// 동적으로 매개변수를 받을 때 
function add10(num) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {

      if (typeof num === 'number') {
        resolve(num + 10);
      } else {
        reject("num이 숫자가 아닙니다.");
      }
    }, 2000);
  });

  return promise;
}

// const p = add10(0);
// p.then((result) => {
//   console.log(result);

//   const newP = add10(result);
//   newP.then((result) => {
//     console.log(result);
//   });
// });


// 콜백 지옥을 방지하기 위한 방법
add10(0)
  .then((result) => {
    console.log(result);
    return add10(result);
  })
  .then((result) => {
    console.log(result);
    return add10(result);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
