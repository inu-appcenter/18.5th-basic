for(let idx=1;idx<=10;idx++){
    if(idx % 2 === 0){ //반복문의 특정 인덱스를 넘어가고 싶을떄
        continue;
    }
    console.log(idx)

    if(idx >= 5){ //반복문을 중간에 멈추고 싶을떄
        break;
    }
}