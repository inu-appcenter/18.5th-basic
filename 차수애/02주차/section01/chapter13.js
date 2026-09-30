// 1. 콜백 함수

 function main(value){
        console.log(1)  ;
        console.log(2)  ;
        value();// sub()를 실행한다.
        console.log(end);
 }

 function sub(){
        console.log("sub");
 }

 main(sub()); // sub()를 먼저 실행하고, 그 결과값을 main()에 전달한다.

 //2. 콜백함수의 활용
function repeat(count) {
    for (let i = 0; i < count; i++) {
        console.log(i);
    }   
}


function repeatDouble(count, callback) {
    for (let i = 0; i < count; i++) {
        callback(i); // 콜백함수 호출
    }   
}