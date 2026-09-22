function add10(num) {
 const promise = new Promise((resolve, reject) => {
    // 비동기 작업을 실행하는 함수
    // executor

    setTimeout(()=>{
        if(typeof num === "number"){  // num이 숫자면 성공 처리, 10을 더한 값을 반환
            resolve(num + 10);
        }else {
            reject("num이 숫자가 아닙니다")
        }
    }, 2000);
});

return promise;
}

// add10(0) 호출 -> 2초 후 결과값(10)을 가진 프로미스 반환
add10(0)
.then((result) => {
    console.log(result); // 10 출력
    return add10(result);
})
.then((result) => {
    console.log(result); // 20 출력
    return add10(result);
})
.then((result) => {
    console.log(result);  // 30 출력
})
.catch((error) => { // 체인 중간에 reject가 발생하면 여기로 넘어와서 에러 처리
    console.log(error);

});