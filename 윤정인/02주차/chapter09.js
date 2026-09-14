//조건문(Conditional Statement) 
//1.if조건문
let num = 10;

if(num >= 10){
  //console.log("num은 10이상입니다.");
  //console.log("조건이 참입니다!");
}
else if(num >= 5){
  //console.log("num은 5이상입니다.");
} else if(num>=3){
  //console.log("num은 3이상입니다.");
}
else{
  //console.log("조건이 거짓입니다!");

}

//2. switch 문
let animal = "cat";

switch(animal){
  case "cat":{
    //console.log("고양이");
    break;
  }
  case "dog":{
    //console.log("강아지");
  }
  case"bear":{
    //console.log("곰");
  }
  case "snake":{
    //console.log("뱀");
  }
  case "tiger":{
    //console.log("호랑이");
  }
}