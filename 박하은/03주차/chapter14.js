// async
// 함수 앞에 붙이는 키워드. 어떤 함수를 비동기 함수로 만들어주는 키워드
// 함수가 promise를 반환하도록 변환해주는 키워드

// async function getData(){ //async 없을 시 서버로부터 유저에 데이터를 받아오는 함수
//   return { //return 객체
//     name: "이정환",
//     id: "winterlood",
//   };
// } //async를 앞에 붙이면, 객체를 결과값으로 갖는 새로운 promise를 반환하는 함수가 된다.

//console.log(getData());

async function getData(){  //이미 promise를 반환하는 비동기 함수였을 시 async가 별다른 일을 안 함.
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve({
        name: "이정환",
        id: "winterlood",
      });
    }, 1500);
  });
} 

//await
//async 함수 내부에서만 사용이 가능 한 키워드
// 비동기 함수가 다 처리되기를 기다리는 역할
//await 이용 시 더이상 복잡하게 then 메서드 쓰지 않아도 됨.
async function printDate(){
  const data = await getData(); //promise 종료시 결과 값을 data에 넣어줌
  console.log(data);
}
printDate();