//스코프 
let a =1;

function funA(){
  let b =2;//지역스코프 
  console.log(a);
  function funB(){}
}

funA();

if(true){
  let c =1;
}

for (let i=0; i<10; i++){
  let d =1;
}

