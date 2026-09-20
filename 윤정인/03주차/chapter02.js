//단락평가 
function returnFalse(){
  //console.log("False 함수");
  return undefined;
}
//접근x
function returnTrue(){
  ///console.log("True함수");
  return 10;
}

//console.log(returnFalse() && returnTrue());

//단락 평가 활용 사례
function printName(person){
  const name = person.name;
  //console.log(name || "person의 값이 없음");
}

printName();
printName({name : "윤정인"});