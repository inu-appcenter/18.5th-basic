function add10(num){



  const promise = new Promise((resolve,reject)=>{
  
  
  //비동기 작업 실행하는 함수
  //executor 

  setTimtout(()=>{
    const num = 10;

    if(typeof num === 'number'){
      resolve(num + 10);
    }else{
      rejuct("num이 숫자가 아닙니다.");
    }
  },2000);
});

  return promise;
}

const p = add10(0);
p.then((result)=>{
  console.log(result);

  const newP = add10(result);
  newP.then((result)=>{
    console.log(result);
  });
  return newP;
}).then((result)=>{
  console.log(result);
});

//them 메서드
//-> 그 후에 
promise.then((value)=>{
  console.log(value);
})
.catch((error)=>{
  console.log(error);
}); //promise chinning