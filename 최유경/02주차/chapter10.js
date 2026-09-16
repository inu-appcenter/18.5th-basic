for (let idx=0; idx < 10; idx++){
  if (idx % 2 === 0){
    continue;
  }
  console.log(idx); // 1, 3, 5
  if (idx >= 5){
    break;
  }
}
