function add(a,b){
  setTimeout(() => {
    const sum = a+b; //3
   // console.log(sum);
  },3000);
}

add(1,2, (value)=>{
  //console.log(value);
});

//---------------------------------

//음식을 주문하는 상황
function orderFood(callback){
  setTimeout(() => {
    const food = "떡볶이";
  },3000);
}

function cooldownFood(food){
  setTimeout(()=> {
    const cooldownFood = `식은 ${food}`;
  },2000);
}

function freezeFood(food){
  setTimeout(()=> {
    const freezeFood = `냉동된 ${food}`;
  },1500);
}

orderFood((food) => {
  //console.log(food);

  cooldownFood(food,(cooldownedFood)=>{
    //console.log(cooldownedFood);

    freezeFood(cooldownFood, (freezedFood)=> {
      //console.log(freezedFood);
    })
  })
});