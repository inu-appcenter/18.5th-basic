// math 모듈

function add(a, b){
    return a + b;
}

function sub(a, b){
    return a- b;
}

// CJS 모듈 시스템

module.exports = { // commonJS 파일안의 것중 밖으로 내보낼것 지정
    add,
    sub,
};

// ES모듈 시스템

export { add, sub };

// 하나의 모듈을 대표하는 default값 

export default function multiply(a,b){
    return a * b;
}