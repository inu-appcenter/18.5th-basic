function add10(num){
  const promise = new Promise((resolve, reject)=>{
  //비동기 작업하는 함수
  //executor

  setTimeout(()=>{

    if(typeof num == 'number'){
      resolve(num + 10);
    }else{
      reject("num이 숫자가 아닙니다");
    }
    
  },2000);
  
});
return promise;

}
const p = add10(0);
add10(0)
.then((result)=>{
  console.log(result);
  return add10(result)
}).then((result)=>{
  console.log(result);
});

// // then 메서드
// // -> 그 후에
// promise
//   .then((value)=>{ //then 성공해야 작동됌
//   console.log(value);
// }).catch((error)=>{ // catch 실패했을 때 작동됨
//   console.log(error);
// });
// // 프로미스 체이닝


// setTimeout(()=>{
//   console.log(promise);
// },3000);
//console.log(promise); //pending:대기상태 ,rejected: 실패상태 fulfilled: 성공
