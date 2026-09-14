// 스코프
// -> 전역(전체 영역) 스코프 / 지역(특정 지역) 스코프
// -> 전역 스코프 : 전체 영역에서 접근 가능
// -> 지역 스코프 : 특정 영역에서 접근 가능

let a = 1; //전역 스코프

function funcA(){
    let b = 2; //지역 스코프
    console.log(a);
    function funcB(){}//지역 스코프
}

funcA();
    console.log(b);// 오류 발생

if (true){
    let c = 1; //지역 스코프
}

for(let i=0;i<10;i++){
    function funcC(){}//반복문이나 조건문에서의 함수 선언식은 지역 스코프가 아님
    let d=1; //지역스코프
}
