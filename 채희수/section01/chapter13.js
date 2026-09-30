// 1. 콜백함수
function main(value) {
  console.log(1);
  console.log(2);
  value(); // sub() 함수 자체를 출력
  console.log("end");
}

function sub() {
  console.log("i am sub");
}

main(sub); 

// 2. 콜백함수 활용
function repeat(count, callback) {
  for(let idx = 1; idx <= count; idx++) {
    callback(idx); // 넘겨받은 콜백 함수에 현재 idx를 넣어 실행
  }
}



repeat(5, function(idx) {
  console.log(idx);
});

repeat(5, function(idx) {
  console.log(idx * 2);
});

repeat(5, function(idx) {
  console.log(idx * 3);
});