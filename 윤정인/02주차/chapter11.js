//함수 선언
function greeting (){
  //console.log("안녕하세요");
}

//console.log("호출 전");
greeting();
//console.log("호출 후");


function getArea(){
  let width = 10;
  let height = 20;
  let area = width * height;

  //console.log(area);
  return area; //반환값 
}

getArea(10,20);
