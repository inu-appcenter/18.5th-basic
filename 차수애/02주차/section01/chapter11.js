// 함수


let area1 = getarea(10, 20); //
console.log(area1);

//호이스팅 -끌어올림

function getarea(width, height){ // 함수의 매개변수로 width와 height를 받는다.
   function another(){ // 중첩 함수
        console.log("another ");
    }
    another();
    let area = width * height

    return area; // return은 함수의 결과값을 반환하는 역할을 한다.
    console.log("함수 종료"); // return 이후의 코드는 실행되지 않는다.
}