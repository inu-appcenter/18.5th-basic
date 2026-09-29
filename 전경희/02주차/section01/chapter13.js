// 1. 콜백 함수

function main(value) {
  //console.log(value);
  //console.log(1);
  //console.log(2);
  value();
  //console.log("end");
}

/*
function sub() { // 콜백 함수
  console.log("i am sub");
}

main(sub);
*/

main(() => {
  //console.log("i am sub");
})

// 2. 콜백함수의 활용
/*
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

repeat(5);
repeatDouble(5);
*/

function repeat(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}

/*
repeat(5, function (idx) {
  console.log(idx); 
})

repeat(5, function(idx) {
  console.log(idx * 2);
})

repeat(5, function(idx) {
  console.log(idx * 3);
})
*/

repeat(5, (idx) => {
  console.log(idx); 
})

repeat(5, (idx) => {
  console.log(idx * 2);
})

repeat(5, (idx) => {
  console.log(idx * 3);
})