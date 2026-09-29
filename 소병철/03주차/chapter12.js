// 2-12) 비동기 작업 처리하기 1. 콜백 함수
// 간단한 작업을 비동기 처리하도록 해보자

function add(a, b) {
  setTimeout(() => {
    const sum = a + b;
    console.log(sum);
  }, 3000);
}

add(1, 2); // 3초 뒤에 3이 출력된다.
// sum 변수에 들어있는 값을 함수 바깥에서도 이용하도록 만드려면
// 인수로 비동기 처리의 결과 값을 사용하고자 하는 콜백 함수를 전달하면 된다.

function add2(a, b, callback) {
  setTimeout(() => {
    const sum = a + b;
    callback(sum);
  }, 3000);
}

// 값을 계산한 다음 매개변수로 받은 콜백 함수를 다시 호출하면서 값을 전달받는다.
add2(1, 2, (value) => {
  console.log(value);
});

// 실용적인 실습을 하나 해 보자, 음식을 주문하는 상황:
function orderFood(callback) {
  setTimeout(() => {
    // 대충 만들어지는 음식을 햄버거라고 하자.
    const food = "햄버거";
    // 밖에서도 음식을 활용하려면 콜백 함수에 넘겨주어야 한다.
    callback(food);
  }, 3000);
}

// 음식을 바로 먹으면 뜨겁다
function cooldownFood(food, callback) {
  setTimeout(() => {
    const cooldownedFood = `식은 ${food}`;
    // 식은 음식을 먹으려면 밖으로 내보내 주어야 한다.
    callback(cooldownedFood);
  }, 2000);
}

// 얼려보자
function freezeFood(food, callback) {
  setTimeout(() => {
    const frozenFood = `냉동된 ${food}`;
    // 얼린 음식을 활용하려면 똑같이 밖으로 내보내 주어야 한다.
    callback(frozenFood);
  }, 1500);
}

orderFood((food) => {
  console.log(food); // 3초 뒤에 햄버거 출력

  // 비동기 작업의 결과를 또 다른 비동기 작업의 인수로 전달
  cooldownFood(food, (cooldownedFood) => {
    console.log(cooldownedFood); // 2초 뒤에 식은 햄버거 출력

    // 비동기 작업의 결과를 또 또 다른 비동기 작업의 인수로 전달
    freezeFood(cooldownedFood, (frozenFood) => {
      console.log(frozenFood); // 1.5초 뒤에 냉동된 식은 햄버거 출력
    });
  });
});
