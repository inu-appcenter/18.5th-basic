// 비동기 작업을 하는 함수의 결과를 외부에서 이용하는 방법
// function add(a, b, callback) {
//     setTimeout(() => {
//     const sum = a + b;
//     callback(sum);
//     }, 3000);
// }

// add(1, 2, (value) => {
// console. log(value);
// });

//음식 주문하는 상황
function orderFood(callback){
    setTimeout(()=>{
        const food ="떡볶이";
        callback(food);
    },3000);
}

function cooldownFood(food,callback){
    setTimeout(()=>{
        const cooldownFood = `식은 ${food}`;
        callback(cooldownFood);
    },2000)
}

function freezeFood(food, callback){
    setTimeout(()=>{
        const freezeFood = `냉동된 ${food}`;
        callback(freezeFood);
    },1500);
}

orderFood((food) =>{
    console.log(food);

    cooldownFood(food,(cooldownFood)=>{
        console.log(cooldownFood);

        freezeFood(cooldownFood,(freezeFood)=>{
            console.log(freezeFood);
        });
    });
});