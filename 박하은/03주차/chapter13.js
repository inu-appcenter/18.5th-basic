function add10(num){
  const promise = new Promise((resolve, reject)=>{ //비동기 작업을 성공상태로 바꾸는 함수, 비동기 작업을 실패상태로 바꾸는 함수
  //인수로 프로미스에 결과값을 전달
  //비동기 작업을 실행하는 함수
  // executor

  setTimeout(()=>{
    //const num = null;

    if(typeof num === "number"){
      resolve(num+10);
    }

    //console.log("안녕");
    //resolve("안녕");
    else{
      reject("num이 숫자가 아닙니다.");
    }
    
  }, 2000);

});
return promise;
}


add10(0).then((result)=>{
  console.log(result);
  return add10(result);
   //newP란 promise객체가 then 메서드의 결과값이 된다.
}).then((result)=>{
    console.log(result);
    return add10(undefined);
}).then((result)=>{
  console.log(result);
}).catch((error)=>{
  console.log(error);
});

//console.log(promise); //promise 객체 출력 후 안녕 출력
//then 메서드
//-> 그 후에
//프로미스에 비동기 작업이 성공했을 때만 실행.

// promise.then((value)=>{
//   console.log(value);
// });

// promise.catch((error)=>{ //then의 실패 버전
//   console.log(error);
// });

// promise.then((value)=>{ //promise chaining
//   console.log(value);
// }).catch((error)=>{ //then의 실패 버전
//   console.log(error);
// });



// setTimeout(()=>{
//   console.log(promise);
// }, 3000);


//