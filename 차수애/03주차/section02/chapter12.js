// 예제1
function add(a,b, callback){
    setTimeout(() => {
        const sum = a+ b;
        callback(sum);
    }, 3000);
}

add(1,2, (value)=>{
    console.log(value);
});

// 예제 2. 음식을 주문하는 상황

function orderFood(){
    setTimeout(() => {
        const food = "떡볶이";
        callback(food);
    }, 3000);
}

function cooldownFood(food, callback){
    setTimeout(() => {
        const cooldownedFood = `식은 ${food}`;
        callback(cooldownedFood);
    }, 20000);

}

function freezeFood(food){
    setTimeout(() => {
        const freezeedFood = `냉동된 ${food}`;
        callback(freezeedFood);
    }, 1500);
}

orderFood((food) => {
    console.log(food);

    cooldownFood(food, (cooldownFood)=>{
        console.log(cooldownedFood);

         freezeFood(cooldownFood, (freezeFood) => {
        console.log(freezeFood);
         })
    });

});