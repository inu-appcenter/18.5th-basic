// async
//어떤 함수를 비동기 함수로 만들어주는 키워드
// 함수가 프로미스를 반환하도록 변환해주는 그런 키워드

async function getDate() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                name: "이정환",
                id : "winterlood",
            });

        }, 1500)
    });


}

//await
//async 함수 내부에서만 사용이 가능 한 키워드
// 비동기 함수가 다 처리되기를 기다리는 역할

async function printDate() {
   const date = await getDate(); // getDate()가 끝날 때까지 기다린 후 결과값을 date에 저장
   console.log(date)
    
}

printDate(); // 내부에서 await 때문에 1.5초 기다렸다가 결과 출력됨