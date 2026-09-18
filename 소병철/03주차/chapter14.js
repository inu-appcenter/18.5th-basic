// 2-14) 비동기 작업 처리하기 3. async/await

// 1. async
// 어떤 함수를 비동기 함수로 만들어주는 키워드
// => 함수가 Promise를 반환하도록 변환하는 키워드

// 데이터를 받아오는 함수라 가정, async 키워드를 붙여주면 비동기 함수로 바뀜
// => 함수의 반환 값을 결과값으로 갖는 Promise를 반환하는 함수로 변환
// 애초에 Promise 객체를 반환하도록 하는 함수는 별 다른 기능을 하지 않고 그대로 반환한다.
async function getData() {
  return { name: "이름", id: "userId" };
}

// Promise 객체가 출력, 결과값은 반환하도록 한 객체가 담김.
console.log(getData());

// 2. await
// async 함수 내부에서만 사용 가능한 키워드, 비동기 함수가 다 처리되기를 기다림.

async function printData() {
  // then 메서드 필요 없이 getData 함수가 반환하는 결과값을 변수에 집어넣음.
  const data = await getData();
  console.log(data); // 결과값 그대로 출력
}

printData();
