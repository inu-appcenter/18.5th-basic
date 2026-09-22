// async
// 어떤 함수를 비동기 함수로 만들어주는 키워드
// 함수가 프로미스를 반환하도록 변환해주는 키워드

async function getData() { //이 함수는 async키워드에 의해 비동기 함수로 바뀜
  return {
    name: "최유경",
    id: "winterlood",
  };
}

console.log(getData());

async function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "최유경",
        id: "winterlood",
      });
    }, 1500);
  });
}
//애초에 Promise를 반환하는 비동기함수라면 async가 별다른 일을 하지X 
console.log(getData());


// await
// async 함수 내부에서만 사용이 가능한 키워드
// 비동기 함수가 다 처리되기를 기다리는 역할

// function printData() {
//   getData().then((result) => {
//     console.log(result);
//   });
// }

// printData();

async function printData() {
  const data = await getData(); //getData함수가 반환하는 Promise가 종료되길 기다림
  console.log(data);

}

printData();
