function add10(num){
    const promise = new Promise((resolve,reject) => {
        //비동기 작업 실행하는 함수
        //executor

        setTimeout(() => {
            
            if(typeof num === 'number'){
                resolve(num+10);
            }else{
                reject("num이 숫자가 아닙니다");
            }
        },2000);
    });
    return promise;
}

// const p = add10(0);
// p.then((result)=>{
//     console.log(result);
//     const newP = add10(result);
//     newP.then((result) => {
//         console. log(result);
//     });
// });

//콜백 지옥 해결법
add10(0)
    .then((result)=>{
        console.log(result);
        return add10(result);
    })
    .then((result) => {
        console. log(result);
        return add10(result);
    })
    .then((result) => {
        console. log(result);
    })
    .catch((error) => {
        console.log(error);
    });



// // then 메서드
// // -> 그 후에

// promise.then((value)=>{//promise 로 관리하는 비동기 작업의 결과 값을 가져온다
//     console.log(value);
// })

// promise.catch((error)=>{//비동기 작업이 실패했을때 결과 값을 가져온다
//     console.log(error);
// });

// //promise chaining
// //then 자체가 promise객체를 반환하기 떄문에 이어서 작성할수 있다.
// promise.then((value)=>{
//     console.log(value);
// })
// .catch((error)=>{
//     console.log(error);
// });
