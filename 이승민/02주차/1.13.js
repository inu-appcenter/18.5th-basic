// 1. 콜백 함수

function main(value) {
  value();
}

function sub() {
  console.log("i am sub");
}

main(sub);

// 2. 콜백 함수의 활용
function repeat(count, callback) {
  for(let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}

repeat(5, function(idx) { // 간결한 표현 : (idx) =>  
  console.log(idx);
});

repeat(5, function(idx) {
  console.log(idx * 2);
});

repeat(5, function(idx) {
  console.log(idx * 3);
});
