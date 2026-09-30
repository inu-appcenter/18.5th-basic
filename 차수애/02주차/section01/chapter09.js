// 1. if 조건문 (if문)

let num = 10;

if(num > 5){
    console.log("num은 5보다 크다.");

}
else if(num === 5){ 
    console.log("num은 5와 같다.");
}
else if(num < 5){
    console.log("num은 5보다 작다.");
}
else {
    Console.log("거짓");
}


//2. switch 조건문

let animal = "강아지";

switch(animal){
    case "강아지": {
            console.log("강아지입니다.");
            break;
        }
    case "고양이":   {
            console.log("고양이입니다.");
        }
    case "햄스터":  {
            console.log("햄스터입니다.");
            break;
        }
    case "토끼":  {
            console.log("토끼입니다.");
            break;          
        }
    case "기니피그": {
            console.log("기니피그입니다.");
            break;
        }
        default: {
            console.log("해당하는 동물이 없습니다.");
        }
}