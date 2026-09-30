// callback: 계산이 끝난 뒤 실행할 함수
// function add(a,b, callback){
//   setTimeout(()=>{
//     const sum = a + b;
//     callback(sum); // 계산 결과 sum을 callback 함수에 전달
//   }, 3000);
// }

// add(1,2, (value)=>{
//   console.log(value);
// });

// 음식을 주문하는 상황
function orderfood(callback){
  setTimeout(()=>{
    const food = "떡볶이";
    callback(food);
  }, 3000);
}

function cooldownedFood(food, callback){
  setTimeout(()=>{
    const cooldownedFood = `식은 ${food}`;
    callback(cooldownedFood);
  }, 2000);
}

function freezefood(food, callback){
  setTimeout(()=>{
    const freezedFood = `냉동된 ${food}`;
    callback(freezedFood);
  }, 1500);

}

orderfood((food)=>{
  console.log(food);

  cooldownedFood(food, (cooldownedFood)=>{
    console.log(cooldownedFood);

    freezefood(cooldownedFood, (freezedFood)=>{
      console.log(freezedFood);
    });
  });
});