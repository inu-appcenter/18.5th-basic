// function returnFalse() {
//   console.log("False 함수");
//   return false; //undefined;
// }

// function returnTrue() {
//   console.log("True 함수");
//   return true; //10;
// }

// console.log(returnFalse() && returnTrue());
// console.log(returnTrue() || returnFalse());


// 단락 평가 활용 사례

function printName(person) {
  // if (!person) {
  //   console.log("person에 값이 없음"); 
  //   return;
  // }
  const name = person && person.name;
  console.log(name || "person의 값이 없음"); 
  // T || T >> 첫번째 T한 값이 반환
  // T %% T >> 두번째 T한 값이 반환
}

printName();
printName({name: "전경희"});