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
