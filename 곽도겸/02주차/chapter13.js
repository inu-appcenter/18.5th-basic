// 1. 콜백함수
function main(value){
    value();
}


main(()=>{// 콜백 함수
    // console.log("i am sub");
});//함수 자체를 인수로 넘겨주기 

// 2. 콜백 함수의 활용
function repeat(count,callback){
    for(let idx=1;idx<=count;idx++){
        callback(idx)
    }
}

repeat(5,function (idx){//콜백 함수
    console.log(idx) 
});

repeat(5,function (idx){
    console.log(idx*2)
});

repeat(5,(idx)=>{
    console.log(idx*3)
});//화살표 함수 활용