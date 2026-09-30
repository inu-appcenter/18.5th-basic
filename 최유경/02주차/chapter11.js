//함수
/*
function getArea(width, height){
  function another(){
    console.log("another")
  }
  another();

  let area = width * height;

  return area; //반환값
  console.log("hello");
}
*/
//호이스팅
// -> 끌어올리다 라는 뜻
let area1 = getArea(10, 20);
console.log(area1);

function getArea(width, height){
  function another(){
    console.log("another")
  }
  another();

  let area = width * height;

  return area; //반환값
  console.log("hello");
}

