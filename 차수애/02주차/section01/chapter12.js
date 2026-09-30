// 1. 함수 표현식
function funA() {
  //console.log("funA");
}

let varA = funA; // 변수 varA에 함수 funA를 할당한다.
varA(); // varA()를 호출하면 funA()가 실행된다.

let varB = function () { // 익명 함수
   //console.log("funB");
}

varB(); 

//2. 화살표 함수
let varC = (value) => {
    console.log(value);
    return value +2;
}

console.log(varC(10)); 