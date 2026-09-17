 // 1. 함수 표현식
 function funcA(){
    // console.log("funcA");
 };
 let varA = funcA;//함수를 변수에 넣기 가능
 varA();//변수의 이름으로 함수 호출이 가능

 let varB = function (){ // 익명함수 
    // console.log("funcB");
 };//함수를 만들자 마자 변수에 넣기 가능,이런 것을 함수표현식 이라고 한다.
 //하지만 함수를 선언한것이 아니므로 함수이름으로 호출이 불가능함 , 따라서 함수 이름을 빼기도 하는데 이렇게 이름이 없는 함수를 익명함수라고 한다.
 varB();

 // 2. 화살표 함수
 let varC = (value) => {
    console.log(value);   
    return value+1;
 }
 console.log(varC(10));
