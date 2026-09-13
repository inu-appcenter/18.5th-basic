//1. 콜백함수
function main(value){
  console.log(1);
  value();
  console.log("end");
}

main(() => {  //함수표현식
  console.log("i am sub");
});

//2. 콜백함수의 활용
function repeat(count, callback){
  for (let idx = 1; idx<=count; idx++){
    callback(idx);
  }
}

repeat(5, function(idx){
  console.log(idx)
});

repeat(5, function(idx){
  console.log(idx * 2)
});

repeat(5, (idx) => {  //화살표함수
  console.log(idx * 3)
});