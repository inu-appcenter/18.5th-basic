//1. spread 연산자

let arr1 = [1, 2, 3];
// 스프레드 연산자(...)로 arr의 요소를 하나씩 펼쳐서 새 배열에 넣음
let arr2 = [4, ...arr1, 5, 6]; // [4, 1, 2, 3, 5, 6]

let obj1 = {
    a:1,
    b:2,
};

let obj2 = { // obj1의 속성(a, b)을 펼쳐서 새 객체에 복사하고, c와 d를 추가
    ...obj1,
    c:3,
    d:4,
};

function funcA(p1, p2, p3) {
    console.log(p1, p2, p3);
};

funcA(...arr1);

// 2. Rest 매개변수
// 나머지, 나머지 매개변수

function funcB(one, ...rest){ // // Rest 매개변수 : 남은 인수들을 하나의 배열로 모아서 받음
    console.log(rest);
}

funcB(...arr1);