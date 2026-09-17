//함수선언

// function greeting() {
//     console.log("안녕하세요");
// }
// console.log("호출 전");
// greeting();//함수를 호출할때는 함수이름과 함께 소괄호를 적여야한다.
// console.log("호출 후");


//호이스팅
//->끌어올린다 라는 뜻
//함수호출과 선언의 순서 상관없이 작동되는 기능
let area1 = getArea(10,20);//함수를 호츌하면서 함수에게 전달한 값들을 인수라고 한다.
console.log(area1);

function getArea(width,height){//함수에서 전달된 인수들을 순서대로 저장하는 변수를 매개변수라고 한다.

    function another(){
        console.log("another");
    }
    another(); //함수안에서 또 다른 함수를 선언할 수도 있다 , 이것을 중첩 함수라고 한다.

    let area =width*height;

    return area; //반환값
}



