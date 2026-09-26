// function add(a, b) {
//   setTimeout(() => {
//     const sum = a + b;
//     console.log(sum);
//   }, 3000);
// }

// add(1, 2);
// 3 <- 3초뒤 출력

//비동기 결과값인 sum이라는 변수를 add함수 바깥에서도 사용할 수 있도록
function add(a, b, callback) {
  setTimeout(() => {
    const sum = a + b;
    callback(sum);
  }, 3000);
}
//비동기 함수의 결과값을 사용하고자 하는 콜백 함수를 함께 전달
add(1, 2, (value) => {
  console.log(value);
});



// 음식을 주문하는 상황
function orderFood(callback) {
  setTimeout(() => {
    const food = "마라탕";
    callback(food);
  }, 3000);
}

function cooldownFood(food, callback) {
  setTimeout(() => {
    const cooldownedFood = `식은 ${food}`;
    callback(cooldownedFood);
  }, 2000);
}

function freezeFood(food, callback) {
  setTimeout(() => {
    const freezedFood = `냉동된 ${food}`;
    callback(freezedFood);
  }, 1500);
}

orderFood((food) => {
  console.log(food);

  cooldownFood(food, (cooldownedFood) => {
    console.log(cooldownedFood)

    freezeFood(cooldownedFood, (freezedFood) => {
      console.log(freezedFood);
    })
  });

});
// 인덴트(들여쓰기)가 깊어지는 형태 => 기능이 늘어날 수록 가독성이 떨어짐 ,, 콜백 지옥


// 마라탕 <- 3초뒤
// 식은 마라탕 <- 2초뒤
// 냉동되 식은 마라탕 <- 1.5초뒤