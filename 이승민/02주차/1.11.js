// 함수 선언
function getArea(width, height) // 매개 변수
{
  function another() // 중첩 함수
  {
    console.log("another");
  }
  another();
  let area = width * height;

  return area; // 반환값
}

let area1 = getArea(10, 20); // 인수
console.log(area1);

// 호이스팅
// -> 끌어올리다 라는 뜻
// 선언문을 호출문보다 아래에 두어도 내부적으로 호이스팅 되어서 실행되기 때문에 오류 발생 X