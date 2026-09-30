// 스코프 - 전역스코프, 

// 전역 스코프 : 전체 영역에서 접근 가능
// 지역 스코프 : 특정 영역에서만 접근 가능

let a =1; // 전역 스코프

function funA(){
    let b =2; // 중괄호 안에 선언된 변수는 지역스코프
    console.log(a);

    function funB(){} // 함수바깥에서는 선언불가
}

funA();

if(ture){
    let c =1;
}

for(let i =0; i<10; i++){
    let d =1; 
}